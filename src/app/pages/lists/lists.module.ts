import { CommonModule } from '@angular/common';
import { ModuleWithProviders } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListsPage } from './lists.page';



@NgModule({
  declarations: [ListsPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ListsPage }]),
    SharedModule.forRoot()
  ],
  exports: [ListsPage]
})
export class ListsModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ListsModule,
    };
  }
}
