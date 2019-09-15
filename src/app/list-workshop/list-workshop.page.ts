import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-workshop',
  templateUrl: './list-workshop.page.html',
  styleUrls: ['./list-workshop.page.scss'],
})
export class ListWorkshopPage implements OnInit {
  public filter_icons = ["options","close"];
  public filter_enabled = 0;
  constructor() { }

  ngOnInit() {
  }

}
