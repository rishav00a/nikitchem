import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ListSalesmanComponent } from './list-salesman.component';

@NgModule({
  declarations: [ListSalesmanComponent,],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[
    ListSalesmanComponent,
  ]
})
export class ListSalesmanModule { }
