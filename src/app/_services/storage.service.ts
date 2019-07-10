import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import {Subject} from 'rxjs/Subject';   




@Injectable({
  providedIn: 'root'
})
export class StorageService {
  dataValue = new Subject();

  constructor(private storage: Storage) { }
  
  announceUpdate(){
    this.dataValue.next(); 
  }

  // CREATE
  addItem(ITEMS_KEY,item:any): Promise<any> {
    return  this.storage.set(ITEMS_KEY, item);
  }

  addSingleItem(ITEMS_KEY,item:any): Promise<any> {

    
    return this.storage.get(ITEMS_KEY).then((items) => {
      if (items) {
        console.log("before adding");
        console.log(items);
        items.push(item);
        this.storage.set(ITEMS_KEY, items);
      } else {
        
        this.storage.set(ITEMS_KEY, []);
      }
      
      return this.storage.get(ITEMS_KEY);
    });
  }


  // READ
  getItems(ITEMS_KEY): Promise<any[]> {
    return this.storage.get(ITEMS_KEY);
  }

  // UPDATE
  updateItem(ITEMS_KEY,item): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: any[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let newItems: any[] = [];

      for (let i of items) {
        if (i.pk === item.pk) {
          newItems.push(item);
        } else {
          newItems.push(i);
        }
      }

      return this.storage.set(ITEMS_KEY, newItems);
    });
  }

  // DELETE
  deleteItem(ITEMS_KEY,pk: number): Promise<any> {
    return this.storage.get(ITEMS_KEY).then((items: any[]) => {
      if (!items || items.length === 0) {
        return null;
      }

      let toKeep: any[] = [];

      for (let i of items) {
        if (i.pk !== pk) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    });
  }
}
