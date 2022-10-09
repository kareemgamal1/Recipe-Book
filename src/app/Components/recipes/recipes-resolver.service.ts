import { Injectable } from '@angular/core';
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Injectable({ providedIn: 'root' })
export class RecipesResolverService implements Resolve<recipe[]> {
  constructor(
    private DataStorage: DataStorageService,
    private RecipeService: RecipeService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const recipes = this.RecipeService.getRecipes();
    if (recipes.length === 0) {
      return this.DataStorage.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
