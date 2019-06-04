import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProfileComponent} from './profile.component';
import { IonicModule} from '@ionic/angular';

@NgModule({
  declarations: [ProfileComponent,],
  imports: [
    IonicModule,
    CommonModule,
  ],
  exports:[ProfileComponent,]
})
export class ProfileModule { }
