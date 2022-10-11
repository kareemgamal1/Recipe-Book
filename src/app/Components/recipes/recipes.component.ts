import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import {
  ActivatedRoute,
  ChildrenOutletContexts,
  Router,
} from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  animations: [
    trigger('recipes', [
      state(
        'normal',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void=>*', [
        animate(
          '0.8s ease-out',
          keyframes([
            style({
              transform: 'translateX(-3%)',
              opacity: 0,
            }),
            style({
              transform: 'translateX(-1.5%)',
              opacity: 0.5,
            }),
            style({
              transform: 'translateX(-0.5%)',
              opacity: 0.7,
            }),
            style({
              transform: 'translateX(0)',
              opacity: 1,
            }),
          ])
        ),
      ]),
      transition('*=>void', [
        style({ opacity: 0, transform: 'translateX(-3%)' }),
        animate(500),
      ]),
    ]),

    trigger('routeAnimations', [
      state(
        'normal',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('*<=>*', [
        animate(
          '0.8s ease-out',
          keyframes([
            style({
              transform: 'translateX(-3%)',
              opacity: 0,
            }),
            style({
              transform: 'translateX(-1.5%)',
              opacity: 0.5,
            }),
            style({
              transform: 'translateX(-0.5%)',
              opacity: 0.7,
            }),
            style({
              transform: 'translateX(0)',
              opacity: 1,
            }),
          ])
        ),
      ]),
      // transition('recipeDetail<=>recipeDetail'),
      transition('void=>*', [
        animate(
          '0.8s ease-out',
          keyframes([
            style({
              transform: 'translateX(-3%)',
              opacity: 0,
            }),
            style({
              transform: 'translateX(-1.5%)',
              opacity: 0.5,
            }),
            style({
              transform: 'translateX(-0.5%)',
              opacity: 0.7,
            }),
            style({
              transform: 'translateX(0)',
              opacity: 1,
            }),
          ])
        ),
      ]),
      transition('*=>void', [
        style({ opacity: 0, transform: 'translateX(-2%)' }),
        animate(500),
      ]),
    ]),
  ],
})
export class RecipesComponent {
  state = 'normal';
  selectedRecipe!: recipe;
  id: number = 0;
  constructor(
    private dataStorage: DataStorageService,
    private router: Router,
    private route: ActivatedRoute,
    private contexts: ChildrenOutletContexts
  ) {}

  onChangeState() {
    this.state = this.state == 'normal' ? 'changed' : 'normal';
  }

  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
    this.onChangeState();
  }

  getRouteAnimationData() {
    return this.contexts.getContext('primary')?.route?.snapshot?.data?.[
      'animation'
    ];
  }
}
