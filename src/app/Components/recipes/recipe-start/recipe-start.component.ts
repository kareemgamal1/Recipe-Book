import { Component, OnInit } from '@angular/core';
import { DataStorageService } from '../../shared/data-storage.service';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-start',
  templateUrl: './recipe-start.component.html',
  styleUrls: ['./recipe-start.component.scss'],
})
export class RecipeStartComponent {
  message = 'Please Select Recipe!';
  constructor(private RecipeService: RecipeService) {
    if (this.RecipeService.getRecipes().length === 0) {
      this.message = 'Please add/fetch recipes!';
    } else {
    }
  }
}
