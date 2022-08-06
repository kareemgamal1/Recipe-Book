import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<recipe>();
  recipes: recipe[] = [
    new recipe(
      'Lasagna',
      'Cheesy shit',
      'https://www.motorbiscuit.com/wp-content/uploads/2020/05/1973-Honda-CB350-Four.jpg'
    ),
    new recipe(
      'Bruger',
      'Cholesterol filled',
      'https://www.motorbiscuit.com/wp-content/uploads/2020/05/1973-Honda-CB350-Four.jpg'
    ),
  ];
  constructor() {}

  ngOnInit(): void {}
  onRecipeSelected(recipeElement: recipe) {
    this.recipeWasSelected.emit(recipeElement);
  }
}
