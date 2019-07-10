import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListLocationComponent } from './list-location.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [ListLocationComponent,],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports:[ListLocationComponent,]
})
export class ListLocationModule { }
