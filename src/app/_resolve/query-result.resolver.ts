import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { RequestsService } from '../_services/requests.service';

@Injectable({
  providedIn: 'root'
})
export class QueryResultResolver implements Resolve<string> {
  constructor(private requestsService: RequestsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<string> {
    return this.requestsService.checkResolveText()
  }
}
