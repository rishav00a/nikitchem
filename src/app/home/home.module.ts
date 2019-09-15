import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { AuthGuard } from '../_guards';
import { HomePage } from './home.page';
import { BeatPlanModule } from '../beat-plan/beat-plan.module' 
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BeatPlanModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage,
        canActivate:[AuthGuard,]
      }
    ])
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
