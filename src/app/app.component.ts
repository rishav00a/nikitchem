import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './_services';
import { Events,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public userprof;

  public appPages = [
    {
      title: 'Home',
      url: '/dashboard',
      icon: 'home'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService,
    public events: Events,
    public alertController: AlertController

  ) {
    this.initializeApp();
    this.authenticationService.CurrentUserProfile.subscribe( value => {
      this.userprof=value?value:{};
    });
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleLightContent();
      this.statusBar.backgroundColorByHexString('#072e42');
      this.splashScreen.hide();
    });

    this.authenticationService.getProfileInfo().subscribe(
      profiledata => {},
      error => {}
    );
  }

  async logout(){

    const alert = await this.alertController.create({
      header: 'Logout!',
      message: 'Are you sure you want to <strong>Logout</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            // console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Confirm',
          handler: () => {
            console.log('Logged Out');
            this.authenticationService.logout();
          }
        }
      ]
    });

    await alert.present();
    
  }

  
}
