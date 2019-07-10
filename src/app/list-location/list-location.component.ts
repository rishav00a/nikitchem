import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-location',
  templateUrl: './list-location.component.html',
  styleUrls: ['./list-location.component.scss'],
})
export class ListLocationComponent implements OnInit {
  @Input() listdata: any;

  constructor() { }

  ngOnInit() {
  }

}
