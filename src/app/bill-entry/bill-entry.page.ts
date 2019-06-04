import { Component, OnInit } from '@angular/core';
import { LoadingController, ToastController,Events,AlertController  } from '@ionic/angular';

@Component({
  selector: 'app-bill-entry',
  templateUrl: './bill-entry.page.html',
  styleUrls: ['./bill-entry.page.scss'],
})
export class BillEntryPage implements OnInit {

  constructor(
      public loadingController: LoadingController,
      public alertController: AlertController
  ) { }

  ngOnInit() {
  }

async loading()
{
  const loading = await this.loadingController.create({
    message: 'Uploadind Data...',
    duration: 5000
  });
  await loading.present();

}

async presentAlert(header,subheader,msg) {
   const alert = await this.alertController.create({
     header: header,
     subHeader: subheader,
     message: msg,
     buttons: ['OK']
   });

   await alert.present();
 }
}
