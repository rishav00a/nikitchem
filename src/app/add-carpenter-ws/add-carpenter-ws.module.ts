import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { IonicModule } from '@ionic/angular';

import { AddCarpenterWsPage } from './add-carpenter-ws.page';

const routes: Routes = [
  {
    path: '',
    component: AddCarpenterWsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AddCarpenterWsPage],
  providers:[Geolocation,]
})
export class AddCarpenterWsPageModule {}
