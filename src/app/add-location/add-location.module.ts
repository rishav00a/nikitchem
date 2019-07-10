import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AddLocationComponent} from './add-location.component';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AddLocationComponent,],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule, ReactiveFormsModule
  ],
  exports:[AddLocationComponent,]
})
export class AddLocationModule { }
