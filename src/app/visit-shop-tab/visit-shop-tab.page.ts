import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-visit-shop-tab',
  templateUrl: './visit-shop-tab.page.html',
  styleUrls: ['./visit-shop-tab.page.scss'],
})
export class VisitShopTabPage implements OnInit {

  constructor(
    public location: Location,

  ) { }

  ngOnInit() {
  }

}
