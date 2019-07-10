import { Component, OnInit,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver } from '@angular/core';
import { Location } from "@angular/common"; 
import { ActivatedRoute } from '@angular/router';
import {menuitemdetails} from '../../global';
import { Router } from '@angular/router';
import {ApiService} from '../api.service';
import { StorageService } from '../_services/storage.service';
import { Platform } from '@ionic/angular';
import { ListLocationComponent} from '../list-location/list-location.component';
import { ListSalesmanComponent} from  '../list-salesman/list-salesman.component';

const components = {
  0: ListLocationComponent,
  1:ListSalesmanComponent,
};

@Component({
  selector: 'app-listpage',
  templateUrl: './listpage.page.html',
  styleUrls: ['./listpage.page.scss'],
})
export class ListpagePage implements OnInit {
  public page: string;
  public listpagedetails;
  public listdata = [];
  items: any[] = [];
  public api_called:boolean=false;

  componentRef: any;

  @ViewChild('componentcontainer', { read: ViewContainerRef }) entry: ViewContainerRef;

  constructor(public location: Location,
              private route: ActivatedRoute,
              private router: Router,
              private _apiservice: ApiService,
              private storageService: StorageService, 
              private plt: Platform,
              private resolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.page = this.route.snapshot.paramMap.get('page');
    this.listpagedetails = menuitemdetails[this.page];

    this.plt.ready().then(() => {
      this.loadItems();
    });

    this.storageService.dataValue.subscribe((nextValue) => {
    this.initItemss().then(res=>{});  
   })

   
  }

  loadItems() {
    this.storageService.getItems(this.listpagedetails.storage_key).then(items => {
      this.listdata = items;
      this.createComponent(this.listdata);
      // if(this.api_called && (!this.listdata || this.listdata.length==0 )){
      //   this.initItemss();
      // }
    });
  }

  initItemss() { 
    return new Promise((resolve, reject) => {
      this._apiservice.getListData(this.page)
      .subscribe(data => {
        console.log(data);
        this.api_called = true;
        this.storageService.addItem(this.listpagedetails.storage_key,data).then(item => {
          this.loadItems();
          resolve();
        });      
      }); 

    }); 
  }

  doRefresh(event) { 
      this.initItemss().then(res=>event.target.complete());
  }

  navigateCreatePage()
  {
    this.router.navigateByUrl('/create/'+this.page);
  }

  createComponent(data) {
    this.entry.clear();
    const factory = this.resolver.resolveComponentFactory(components[this.listpagedetails.add_new_component_index]);
    this.componentRef = this.entry.createComponent(factory);
    this.componentRef.instance.listdata = data;
}

}
