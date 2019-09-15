import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-order-not-placed',
  templateUrl: './order-not-placed.page.html',
  styleUrls: ['./order-not-placed.page.scss'],
})
export class OrderNotPlacedPage implements OnInit {

  constructor(
    public location: Location,

  ) { }

  ngOnInit() {
  }

}
