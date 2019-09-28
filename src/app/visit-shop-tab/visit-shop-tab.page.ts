import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import {ActivatedRoute, Router, ParamMap} from '@angular/router';

@Component({
  selector: 'app-visit-shop-tab',
  templateUrl: './visit-shop-tab.page.html',
  styleUrls: ['./visit-shop-tab.page.scss'],
})
export class VisitShopTabPage implements OnInit {
  public city_id;
  public selected_first:boolean=true;
  public selected_second:boolean=false;
  public selected_third:boolean=false;

  constructor(
    public location: Location,
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.city_id = this.route.snapshot.queryParams['city_id'] || null;

  }

  switchtab(index){
    this.selected_first = false;
    this.selected_second = false;
    this.selected_third = false;

    switch(index){
      case 1:
        this.selected_first=true;
        break;
      case 2:
        this.selected_second = true;
        break;
      case 3:
        this.selected_third = true;
        break;

    }
  }

}
