import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { VisitShopDetailPage } from './visit-shop-detail.page';

const routes: Routes = [
  {
    path: ':id',
    component: VisitShopDetailPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisitShopDetailPage]
})
export class VisitShopDetailPageModule {}
