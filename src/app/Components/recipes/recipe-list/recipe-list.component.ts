import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
  animations: [
    trigger('recipe', [
      state(
        'in',
        style({
          opacity: 1,
        })
      ),
      transition('void => *', [
        style({ opacity: 0, transition: 'transformX(-5%)' }),
        animate(1000),
      ]),
      transition('* => void', [
        animate(
          '500ms 0.1s ease-in',
          style({ opacity: 0, transition: 'transformX(-5%)' })
        ),
      ]),
    ]),
  ],
})
export class RecipeListComponent implements OnInit {
  recipes!: recipe[];
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipeService.recipesChanged.subscribe((recipes: recipe[]) => {
      this.recipes = recipes;
    });
    this.recipes = this.recipeService.getRecipes();
  }
}
