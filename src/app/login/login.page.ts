import { Component, OnInit } from '@angular/core';
import { MenuController, IonSlides } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(public menu: MenuController,) { }
  ionViewWillEnter() {
    this.menu.enable(false);
  }
  ngOnInit() {
    
  }

}
