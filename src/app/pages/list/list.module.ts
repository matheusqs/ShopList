import { CommonModule } from '@angular/common';
import { ModuleWithProviders, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListPage } from './list.page';



@NgModule({
  declarations: [ListPage],
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: ListPage }]),
    SharedModule.forRoot()
  ],
  exports: [ListPage]
})
export class ListModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ListModule,
    };
  }
}
