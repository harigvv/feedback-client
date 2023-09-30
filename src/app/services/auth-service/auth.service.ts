import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {User} from "../user-service/user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUserSubject: BehaviorSubject<any>;
  public currentUser: Observable<any>;

  AUTHENTICATE_URL = environment.baseUrl + environment.authenticateUrl;
  CREATE_ACCOUNT_URL = environment.baseUrl + environment.createAccountUrl;


  constructor(private http: HttpClient) {
    // @ts-ignore
    this.currentUserSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
  }
  public get currentUserValue() {
    return this.currentUserSubject.value;
  }

  public login(auth:any) {
    return this.http.post<any>(this.AUTHENTICATE_URL, auth)
      .pipe(map(user => {
        // store user details and jwt token in local storage to keep user logged in between page refreshes
        this.storeData(user);
        return user;
      }));
  }
  logout() {
    // remove user from local storage and set current user to null
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
  createAccount(user: User) {
    return this.http.post(this.CREATE_ACCOUNT_URL, user)
  }
  storeData(user: any) {
    localStorage.setItem('currentUser', JSON.stringify(user));
    this.currentUserSubject.next(user);
  }
}
