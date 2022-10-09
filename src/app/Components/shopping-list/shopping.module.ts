import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';
import { ShoppingRoutingModule } from './shopping-routing.module';
import { ShoppingListComponent } from './shopping-list.component';
import { ShoppingEditComponent } from './shopping-edit/shopping-edit.component';

@NgModule({
  imports: [SharedModule, FormsModule, ShoppingRoutingModule],
  declarations: [ShoppingListComponent, ShoppingEditComponent],
})
export class ShoppingModule {}
