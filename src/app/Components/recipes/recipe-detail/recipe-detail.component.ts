import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
  animations: [
    trigger('recipeSelected', [
      state(
        'normal',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      state(
        'changed',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('normal<=>changed', [
        style({ opacity: 0, transform: 'translateX(-2%)' }),
        animate('500ms 1ms ease-out'),
      ]),
    ]),
  ],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe!: recipe;
  state = 'normal';
  id!: number;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.state = this.state == 'normal' ? 'changed' : 'normal';
      console.log(this.state);

      this.recipe = this.recipeService.getRecipe(this.id);
    });
  }

  onAddToShoppingList() {
    this.recipeService.addIngredients(this.recipe.ingredients);
  }

  onEdit() {
    this.router.navigate(['edit'], { relativeTo: this.route });
  }

  onDelete() {
    this.recipeService.deleteRecipe(this.id);
    this.router.navigate(['./recipes']);
  }
}
