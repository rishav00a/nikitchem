import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-add-workshop',
  templateUrl: './add-workshop.page.html',
  styleUrls: ['./add-workshop.page.scss'],
})
export class AddWorkshopPage implements OnInit {

  constructor(
    public location:Location,
  ) { }

  ngOnInit() {
  }

}
