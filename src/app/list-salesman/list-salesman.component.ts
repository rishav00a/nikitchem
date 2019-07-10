import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-list-salesman',
  templateUrl: './list-salesman.component.html',
  styleUrls: ['./list-salesman.component.scss'],
})
export class ListSalesmanComponent implements OnInit {
  @Input() listdata: any;

  constructor() { }

  ngOnInit() {}

}
