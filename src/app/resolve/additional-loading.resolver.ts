import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { BaseService } from '../services/base.service';

@Injectable({
  providedIn: 'root'
})
export class AdditionalLoadingResolver implements Resolve<boolean> {
  constructor(
    private baseService: BaseService
  ) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {

    return this.baseService.getUsers(this.baseService.login, this.baseService.password)
    // this.baseService.getOneUser(this.baseService.account.id);
    // this.baseService.getOneUser(this.baseService.account.id);

  }
}
