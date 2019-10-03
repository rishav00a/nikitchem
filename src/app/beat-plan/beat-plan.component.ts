import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { Platform, Events, IonSelect, LoadingController, AlertController } from '@ionic/angular';
import { IonicSelectableComponent } from 'ionic-selectable'; 
import {ApiService} from '../api.service';
import { AuthenticationService } from '../_services';
import { Router } from '@angular/router';

class Port {
  public id: number;
  public location_name: string;
}

@Component({
  selector: 'app-beat-plan',
  templateUrl: './beat-plan.component.html',
  styleUrls: ['./beat-plan.component.scss'],
})

export class BeatPlanComponent implements OnInit {
  constructor(private _apiservice: ApiService,
              public loadingController: LoadingController,
              public alertController: AlertController,
              private router: Router,
              public authenticationService:AuthenticationService){
  }
  @Input() beatplandata: any; @Input() userprof: any; 
  @ViewChild('cityList') selectRef: IonSelect;
  showList = true;
  ports: Port[];
  port: Port;
  selectedbeatplandata = [];
  public dropdown_icons = ["arrow-dropright","arrow-dropdown"];
  public beatplan_today_enabled=0;
  public beatplan_tomorrow_enabled=0;


  portChange(event: {
    component: IonicSelectableComponent,
    value: any 
  }) {
    this.selectedbeatplandata.push(event.value);
    var index = this.ports.indexOf(event.value);
    this.ports.splice(index, 1);
  }
  ngOnInit() {
    this.ports = this.userprof.beat_plan_locations;
    
  }

 

 
  deleteCity(item){
    var index = this.selectedbeatplandata.indexOf(item);
    this.selectedbeatplandata.splice(index, 1);
    this.ports.push(item);
  }
  displayCities()
  {
    this.selectRef.open();
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

  async updateBeatPlan()
  {
    const loading = await this.loadingController.create({
      message: 'Updating Beatplan...',
      duration: 5000
    });
    await loading.present();
    this._apiservice.postForm("api/sales/create_beatplan",this.selectedbeatplandata).subscribe(data => { 
      console.log(data);
      
      if(data["success"])
      {
        this.presentAlert("Sucess!!!","Beatplan Updated","");
      }
      else{
        this.presentAlert("Oops!!!",data["err"],"");
      }
      this.authenticationService.getProfileInfo().subscribe( value => {
        loading.dismiss(); 
        this.userprof=value?value:{};
        this.beatplandata = this.userprof["beat_plan"];
        this.selectedbeatplandata=[];
        this.ports= data["beat_plan_locations"];
      });
    });
  }

  createRange(number){
    var items: number[] = [];
    for(var i = 1; i <= number; i++){
       items.push(i);
    }
    return items;
  }

  navigateTo(id){
    this.router.navigate(['/visit_shop_tab'], { queryParams: { city_id: id } });
  }

  dropbeatplantoday(){
    if(this.beatplan_today_enabled==1){
      this.beatplan_today_enabled = 0;
    }
    else{
      this.beatplan_today_enabled=1;
    }
  }

  dropbeatplantommorow(){
    if(this.beatplan_tomorrow_enabled==1){
      this.beatplan_tomorrow_enabled = 0;
    }
    else{
      this.beatplan_tomorrow_enabled=1;
    }
  }

}
