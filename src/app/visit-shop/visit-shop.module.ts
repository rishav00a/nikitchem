import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { VisitShopPage } from './visit-shop.page';

const routes: Routes = [
  {
    path: '',
    component: VisitShopPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisitShopPage],
  exports:[VisitShopPage],
})
export class VisitShopPageModule {}
