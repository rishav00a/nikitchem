import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {ActivatedRoute, Router, ParamMap} from '@angular/router';
import { environment } from '../../environments/environment';


import { User,UserProfileInfo } from '../_models';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    public currentUserSubject: BehaviorSubject<User>;
    public CurrentUserProfile: BehaviorSubject<UserProfileInfo>;
    public currentUser: Observable<User>;
    public _userprofile: Observable<UserProfileInfo>;

    apiURL = environment.apiURL;

    constructor(private router: Router,private http: HttpClient) {
        this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
        this.CurrentUserProfile = new BehaviorSubject<UserProfileInfo>(JSON.parse(localStorage.getItem('profile_info')));
        this._userprofile = this.CurrentUserProfile.asObservable();
    }

    public get currentUserValue(): User {
        return this.currentUserSubject.value;
    }

    public get currentUserProfileValue(): UserProfileInfo {
        return this.CurrentUserProfile.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(this.apiURL+`api-token-auth/`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    this.currentUserSubject.next(user);
                }
                return user;
            }));


    }

   
   
    getProfileInfo(){
        return this.http.get<any>(this.apiURL+`api/auth/profile_info`)
        .pipe(map(userprofileinfo => {
            localStorage.setItem('profile_info', JSON.stringify(userprofileinfo));
            this.CurrentUserProfile.next(userprofileinfo);
            return userprofileinfo;
        }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        this.currentUserSubject.next(null);
        localStorage.removeItem('profile_info');
        this.CurrentUserProfile.next(null);
        this.router.navigate(['/login']);
    }

}
