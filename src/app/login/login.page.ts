import { Component, OnInit, NgZone } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { AuthenticationService } from '../_services';
import { first } from 'rxjs/operators';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
    public user: any;
    public nextURL = "dashboard/";
    returnUrl: string="dashboard/";
    error = '';

  constructor(public menu: MenuController,
              private _formBuilder: FormBuilder,
              private authenticationService: AuthenticationService,
              private route: ActivatedRoute,
              public toastController: ToastController,
              private router: Router,
              private _ngZone: NgZone) { }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ngOnInit() {

    this.loginForm = this._formBuilder.group({
      username   : ['', [Validators.required]],//, Validators.email
      password: ['', Validators.required]
  });
  this.user = {
    username: '',
    password: ''
  };

  this.route.paramMap.subscribe((params:ParamMap)=>{
    let next = params.get('returnUrl');
    if(next)
    {
      this.nextURL =next;
    }
  });
  console.log(this.authenticationService.currentUserValue);
  if(this.authenticationService.currentUserValue)
  {
    this.router.navigate([this.returnUrl]);
  }
  // this.authenticationService.logout();
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
    
  }

  login() {
    //   this._userService.login({'username': this.user.username, 'password': this.user.password},this.nextURL);
    // }
      this.authenticationService.login(this.user.username, this.user.password)
          .pipe(first())
          .subscribe(
              data => {
                  this._ngZone.run(() => {
                    this.router.navigate([this.returnUrl]);
                  });
              },
              error => {
                this.presentToast("Incorrect User or Password");
                  this.error = error;
              });

    }
    // refreshToken() {
    //   this._userService.refreshToken();
    // }

    logout() {
      this.authenticationService.logout();
    }

    async presentToast(text) {
      const toast = await this.toastController.create({
        message: text,
        duration: 2000
      });
      toast.present();
    }
}
