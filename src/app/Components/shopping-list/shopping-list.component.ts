import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingService } from './shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss'],
  animations: [
    trigger('shoppingList', [
      state(
        'in',
        style({
          opacity: 1,
          transition: 'transformX(0)',
        })
      ),
      transition('void => *', [
        style({ opacity: 0, transition: 'transformX(-5%)' }),
        animate(500),
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
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients!: Ingredient[];
  private ingredientsChanged!: Subscription;
  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.ingredients = this.shoppingService.getIngredients();
    this.ingredientsChanged = this.shoppingService.ingredientsChanged.subscribe(
      (Ingredient: Ingredient[]) => {
        this.ingredients = Ingredient;
      }
    );
  }

  ngOnDestroy(): void {
    this.ingredientsChanged.unsubscribe();
  }

  onEditItem(index: number) {
    this.shoppingService.startedEditing.next(index);
  }
}
