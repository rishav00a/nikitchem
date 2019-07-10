import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { ListpagePage } from './listpage.page';
import { ListLocationComponent} from  '../list-location/list-location.component';
import { ListLocationModule} from  '../list-location/list-location.module';


import { ListSalesmanComponent} from  '../list-salesman/list-salesman.component';
import { ListSalesmanModule} from  '../list-salesman/list-salesman.module';


const routes: Routes = [
  {
    path: ':page',
    component: ListpagePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListLocationModule,
    ListSalesmanModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ListpagePage],
  entryComponents: [ListLocationComponent,ListSalesmanComponent]
})
export class ListpagePageModule {}
