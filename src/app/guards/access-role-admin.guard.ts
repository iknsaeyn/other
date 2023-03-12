import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { BaseService } from '../services/base.service';

@Injectable({
  providedIn: 'root'
})
export class AccessRoleAdminGuard implements CanActivate {
  constructor(
    private baseService: BaseService,
    private router: Router
  ) { }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.baseService.role === 'admin' && this.baseService.login && this.baseService.password) {
      return true
    } else {
      return this.router.navigateByUrl('/auth')
    }
  }

}
