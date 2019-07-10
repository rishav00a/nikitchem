import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AddLocationModule } from '../add-location/add-location.module';
import { AddLocationComponent } from '../add-location/add-location.component';

import { AddSalesmanComponent } from '../add-salesman/add-salesman.component';
import { AddSalesmanModule } from '../add-salesman/add-salesman.module';


import { IonicModule } from '@ionic/angular';

import { CreateitempagePage } from './createitempage.page';

const routes: Routes = [
  {
    path: ':page',
    component: CreateitempagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddLocationModule, 
    AddSalesmanModule,
    RouterModule.forChild(routes)
  ],
  declarations: [CreateitempagePage],
  entryComponents: [AddLocationComponent,AddSalesmanComponent]
})
export class CreateitempagePageModule {}
