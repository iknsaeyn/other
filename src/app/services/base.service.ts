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

  href: string = ''

  role!: 'user' | 'admin'

  understandTheRole(login: string, passrod: string) {
    if (login == 'atuny0' && passrod == '9uQFF1Lh') {
      this.role = 'user'
    }
    if (login == 'hbingley1' && passrod == ' CQutx25i8r') {
      this.role = 'admin'
    }
  }

  getProducts() {
    return this.http.get('https://dummyjson.com/products')
  }

  getProduct(num: any) {
    return this.http.get('https://dummyjson.com/products/' + num.id)
  }

}