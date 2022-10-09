import { Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingService {
  constructor() {}
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients = [];

  onItemAdded(ingredient: Ingredient) {
    const index = this.ingredients.findIndex((i) => i.name == ingredient.name);
    if (index == -1) {
      this.ingredients.push(ingredient);
      this.ingredientsChanged.next(this.ingredients.slice());
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
        this.ingredientsChanged.next(this.ingredients.slice());
      } else {
        this.ingredients[index].amount -= ingredient.amount;
      }
    }
  }

  getIngredient(index: number) {
    return this.ingredients[index];
  }

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients.push(...ingredients);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngredient(index: number, newIngredient: Ingredient) {
    this.ingredients[index] = newIngredient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}
