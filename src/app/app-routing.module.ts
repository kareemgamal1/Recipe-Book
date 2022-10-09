import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/recipes', pathMatch: 'full' },
  {
    path: 'recipes',
    loadChildren: () =>
      import('./Components/recipes/recipes.module').then(
        (m) => m.RecipesModule
      ),
  },
  {
    path: 'shopping',
    loadChildren: () =>
      import('./Components/shopping-list/shopping.module').then(
        (m) => m.ShoppingModule
      ), 
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
