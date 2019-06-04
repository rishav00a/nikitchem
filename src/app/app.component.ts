import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './_services';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public userprof ={};

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

  ) {
    this.initializeApp();  
    this.authenticationService.CurrentUserProfile.subscribe( value => {
      this.userprof=value?value:{};
    });  
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });

    this.authenticationService.getProfileInfo().subscribe(
      profiledata => {},
      error => {}
    );
  }

  logout(){
    this.authenticationService.logout();
  }
}
