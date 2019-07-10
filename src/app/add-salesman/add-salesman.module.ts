import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddSalesmanComponent} from './add-salesman.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';

@NgModule({
  declarations: [AddSalesmanComponent,],
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicModule,
    IonicSelectableModule,
  ],
  exports:[
    AddSalesmanComponent,
  ]
})
export class AddSalesmanModule { }
