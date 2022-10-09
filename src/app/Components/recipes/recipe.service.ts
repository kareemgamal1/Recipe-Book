import { EventEmitter, Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from '../shopping-list/shopping.service';
import { recipe } from './recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  recipesChanged = new Subject<recipe[]>();

  // private recipes: recipe[] = [
  //   new recipe(
  //     'Lasagna',
  //     'Cheesy shit',
  //     'https://www.budgetbytes.com/wp-content/uploads/2013/07/Creamy-Tomato-Spinach-Pasta-close.jpg',
  //     [new Ingredient('Spaghetti', 1), new Ingredient('Cheese', 3)]
  //   ),

  //   new recipe(
  //     'Bruger',
  //     'Cholesterol filled',
  //     'https://tmbidigitalassetsazure.blob.core.windows.net/rms3-prod/attachments/37/1200x1200/Smash-Burgers_EXPS_TOHcom20_246232_B10_06_10b.jpg',
  //     [new Ingredient('Meat', 1), new Ingredient('Buns', 2)]
  //   ),
  // ];
  private recipes: recipe[] = [];
  constructor(private slService: ShoppingService) {}

  addIngredients(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  getRecipes() {
    return this.recipes.slice(); //slice returns a clone only.
  }
  updateRecipes(recipes: recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes);
  }
  getRecipe(id: number) {
    return this.recipes.slice()[id];
  }

  addRecipe(recipe: recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, recipe: recipe) {
    this.recipes[index] = recipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
