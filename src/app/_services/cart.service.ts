import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { environment } from '../../environments/environment';
import { User,UserProfileInfo,Item } from '../_models';

@Injectable({ providedIn: 'root' })
export class CartService{
    public currentcartSubject: BehaviorSubject<Item[]>;
    public currentcart: Observable<Item[]>;
    public cs;
    constructor(private router: Router,private http: HttpClient) {
        this.currentcartSubject = new BehaviorSubject<Item[]>(JSON.parse(localStorage.getItem('cart_data')));
        this.currentcart = this.currentcartSubject.asObservable();
        
    }

    public get currentcartValue(): Item[] {
        return this.currentcartSubject.value;
    }

    public setCartData(selected_items:Item[]){
        console.log(selected_items);
        localStorage.setItem('cart_data', JSON.stringify(selected_items));
        this.currentcartSubject.next(selected_items);
        return this.currentcartValue;
    }

    public clearCart(){
        localStorage.setItem('cart_data', JSON.stringify([]));
        this.currentcartSubject.next([]);
    }
}