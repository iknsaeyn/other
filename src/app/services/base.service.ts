import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor(
    private http: HttpClient
  ) { }

  arr: any[] = []

  getProducts() {
    return this.http.get('https://dummyjson.com/products')
  }

}