import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/lists/lists.module').then(m => m.ListsModule)
  },
  {
    path: 'show-list/:id',
    loadChildren: () => import('./pages/list/list.module').then(m => m.ListModule)
  },
  {
    path: 'add-list/:id',
    loadChildren: () => import('./pages/add-list/add-list.module').then(m => m.AddListModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
