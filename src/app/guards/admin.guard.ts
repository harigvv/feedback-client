import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth-service/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private auth:AuthService, private router:Router){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      const currentUser = this.auth.currentUserValue;
      if (currentUser && currentUser.role==='ADMIN') {
        // authorised so return true
        return true;
      }
  
      // not logged in so redirect to login page with the return url
      this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
      return false;
  }
  
}
