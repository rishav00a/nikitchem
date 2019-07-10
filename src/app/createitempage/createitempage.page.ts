import { Component, OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
  ComponentRef,
  ComponentFactory } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {menuitemdetails} from '../../global';
import { Location } from "@angular/common"; 
import { AddLocationComponent} from '../add-location/add-location.component';
import { AddSalesmanComponent } from '../add-salesman/add-salesman.component';


const components = {
  0: AddLocationComponent,
  1: AddSalesmanComponent
};

@Component({
  selector: 'app-createitempage',
  templateUrl: './createitempage.page.html',
  styleUrls: ['./createitempage.page.scss'],
})
export class CreateitempagePage implements OnInit {
  public page: string;
  public listpagedetails;
  // public components = [AddLocationComponent,AddSalesmanComponent]
 
  componentRef: any;

  @ViewChild('componentcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(public location: Location,
              private route: ActivatedRoute,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.page = this.route.snapshot.paramMap.get('page');
    this.listpagedetails = menuitemdetails[this.page];
    this.createComponent();
  }

  createComponent() {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(components[this.listpagedetails.add_new_component_index]);
    this.componentRef = this.entry.createComponent(factory);
}

}
