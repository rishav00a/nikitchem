import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { VisitShopTabPage } from './visit-shop-tab.page';
import { IonicModule } from '@ionic/angular';


const routes: Routes = [
  {
    path: '',
    component: VisitShopTabPage,
    children: [
      {
        path: 'dealers',
        children: [
          {
            path: '',
            loadChildren: '../visit-shop/visit-shop.module#VisitShopPageModule'
          }
        ]
      },
      {
        path: 'carpenters',
        children: [
          {
            path: '',
            loadChildren: '../list-carpenter-ws/list-carpenter-ws.module#ListCarpenterWsPageModule'
          }
        ]
      },
      {
        path: 'workshops',
        children: [
          {
            path: '',
            loadChildren: '../list-workshop/list-workshop.module#ListWorkshopPageModule'
          }
        ]
      },
      {
        path: '',
        redirectTo: 'dealers',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [VisitShopTabPage]
})
export class VisitShopTabPageModule {}
