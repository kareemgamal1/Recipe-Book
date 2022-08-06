import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipee!: recipe;
  @Output() recipeSelected = new EventEmitter<void>();

  constructor() {}
  ngOnInit(): void {}
  onSelected() {
    this.recipeSelected.emit();
  }
}
