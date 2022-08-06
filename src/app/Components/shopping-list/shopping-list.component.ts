import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
})
export class ShoppingListComponent implements OnInit {
  ingredients = [new Ingredient('Apples', 5), new Ingredient('Orange', 3)];
  constructor() {}

  ngOnInit(): void {}
  onItemAdded(ingredient: Ingredient) {
    const index = this.ingredients.findIndex((i) => i.name == ingredient.name);
    if (index == -1) {
      this.ingredients.push(ingredient);
    } else {
      this.ingredients[index].amount += ingredient.amount;
    }
  }

  onItemDeleted(ingredient: Ingredient) {
    const index = this.ingredients.findIndex(
      (i) => i.name == ingredient.name && i.amount >= ingredient.amount
    );
    if (index > -1) {
      if (this.ingredients[index].amount == ingredient.amount) {
        this.ingredients.splice(index, 1);
      } else {
        this.ingredients[index].amount -= ingredient.amount;
      }
    }
  }
}
