import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscriber, Subscription } from 'rxjs';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingService } from '../shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: true }) nameInput!: ElementRef;
  @ViewChild('amountInput', { static: true }) amountInput!: ElementRef;
  @ViewChild('f') slForm!: NgForm;
  subscribtion!: Subscription;
  editItemIndex!: number;
  editItem!: Ingredient;
  editMode = false;

  constructor(private shoppingService: ShoppingService) {}

  ngOnInit(): void {
    this.subscribtion = this.shoppingService.startedEditing.subscribe(
      (index: number) => {
        this.editItemIndex = index;
        this.editItem = this.shoppingService.getIngredient(index);
        this.editMode = true;
        this.slForm.setValue({
          name: this.editItem.name,
          amount: this.editItem.amount,
        });
      }
    );
  }

  onAddItem(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingService.updateIngredient(this.editItemIndex, newIngredient);
    } else {
      this.shoppingService.onItemAdded(newIngredient);
    }
    this.resetForm();
  }

  onDeleteItem(f: NgForm) {
    const value = f.value;
    const newIngredient = new Ingredient(value.name, value.amount);
    this.shoppingService.onItemDeleted(newIngredient);
    this.resetForm();
  }

  onClearItem(f: NgForm) {
    this.resetForm();
  }

  resetForm() {
    this.slForm.reset();
    this.editMode = false;
  }
}
