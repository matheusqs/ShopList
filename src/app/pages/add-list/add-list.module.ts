import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { AddListPage } from './add-list.page';



@NgModule({
  declarations: [AddListPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: AddListPage }]),
    SharedModule.forRoot()
  ],
  exports: [AddListPage]
})
export class AddListModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AddListModule,
    };
  }
}
