import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { AuthenticationService } from '../_services';
import { Events } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  public userprof ={};
  usprofavl: boolean=false;
  constructor(private authenticationService: AuthenticationService,
    public events: Events,
    ) { 
      this.authenticationService.CurrentUserProfile.subscribe( value => {
        this.usprofavl = value?true:false;
        this.userprof=value;

    }); 
    
  }

  ngOnInit() {
    this.userprof=this.authenticationService.currentUserProfileValue?this.authenticationService.currentUserProfileValue:{};
  }

 

}
