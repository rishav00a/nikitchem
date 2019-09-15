import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ProductListSelectPage } from './product-list-select.page';
import {Item} from '../_models/index';



const routes: Routes = [
  {
    path: '',
    component: ProductListSelectPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ProductListSelectPage],
  exports:[ProductListSelectPage,],
  providers:[Item,]
})
export class ProductListSelectPageModule {}
