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
  { path: 'create', loadChildren: './createitempage/createitempage.module#CreateitempagePageModule' },
  { path: 'visit_shop', loadChildren: './visit-shop/visit-shop.module#VisitShopPageModule' },
  { path: 'create_shop', loadChildren: './create-shop/create-shop.module#CreateShopPageModule' },
  { path: 'visit_shop_detail', loadChildren: './visit-shop-detail/visit-shop-detail.module#VisitShopDetailPageModule' },
  { path: 'place_order', loadChildren: './place-order/place-order.module#PlaceOrderPageModule' },
  { path: 'order_not_placed', loadChildren: './order-not-placed/order-not-placed.module#OrderNotPlacedPageModule' },
  { path: 'visit_shop_tab', loadChildren: './visit-shop-tab/visit-shop-tab.module#VisitShopTabPageModule' },
  { path: 'list_carpenter_ws', loadChildren: './list-carpenter-ws/list-carpenter-ws.module#ListCarpenterWsPageModule' },
  { path: 'add_carpenter_ws', loadChildren: './add-carpenter-ws/add-carpenter-ws.module#AddCarpenterWsPageModule' },
  { path: 'list_workshop', loadChildren: './list-workshop/list-workshop.module#ListWorkshopPageModule' },
  { path: 'add_workshop', loadChildren: './add-workshop/add-workshop.module#AddWorkshopPageModule' },
  { path: 'product_list_select', loadChildren: './product-list-select/product-list-select.module#ProductListSelectPageModule' }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
