import { Component } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { AuthenticationService } from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public userprof;
  constructor(public menu: MenuController,
              private authenticationService: AuthenticationService,
    ) {
    this.authenticationService.CurrentUserProfile.subscribe( value => {
      this.userprof=value?value:{};
    });
  }

  ionViewWillEnter() {
    this.menu.enable(true);
  }
}
