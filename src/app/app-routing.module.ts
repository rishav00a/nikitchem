import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'listp',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },

  { path: 'bill_entry', loadChildren: './bill-entry/bill-entry.module#BillEntryPageModule' },
  { path: 'payment_status', loadChildren: './payment-status/payment-status.module#PaymentStatusPageModule' },
  { path: 'cheque_report', loadChildren: './cheque-report/cheque-report.module#ChequeReportPageModule' },
  { path: 'list', loadChildren: './listpage/listpage.module#ListpagePageModule' },
  { path: 'create', loadChildren: './createitempage/createitempage.module#CreateitempagePageModule' }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
