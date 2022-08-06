import {
  Component,
  ElementRef,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput!: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput!: ElementRef;
  @Output() addedIngredient = new EventEmitter<{
    name: string;
    amount: number;
  }>();
  @Output() removedIngredient = new EventEmitter<{
    name: string;
    amount: number;
  }>();
  constructor() {}

  ngOnInit(): void {}
  onAddItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, Number(ingAmount));
    this.addedIngredient.emit(newIngredient);
  }
  onDeleteItem() {
    const ingName = this.nameInput.nativeElement.value;
    const ingAmount = this.amountInput.nativeElement.value;
    const newIngredient = new Ingredient(ingName, Number(ingAmount));
    this.removedIngredient.emit(newIngredient);
  }
}
