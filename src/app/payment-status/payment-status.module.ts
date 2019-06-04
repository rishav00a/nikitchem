import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { PaymentStatusPage } from './payment-status.page';

const routes: Routes = [
  {
    path: '',
    component: PaymentStatusPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [PaymentStatusPage]
})
export class PaymentStatusPageModule {}
