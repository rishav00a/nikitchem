import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeatPlanComponent } from './beat-plan.component';
import { IonicModule } from '@ionic/angular';
import { IonicSelectableModule } from 'ionic-selectable';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    BeatPlanComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    FormsModule, 
    ReactiveFormsModule,
    IonicSelectableModule
  ],
  exports:[
    BeatPlanComponent,
  ]
})
export class BeatPlanModule { }
