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
  id!: number

  href: string = ''

  role!: 'user' | 'admin' | ''
  name: string = ''
  account!: object

  understandTheRole(login: string, passrod: string) {
    if (login == 'atuny0' && passrod == '9uQFF1Lh') {
      this.role = 'user'
      this.name = login
    }
    if (login == 'hbingley1' && passrod == 'CQutx25i8r') {
      this.role = 'admin'
      this.name = login
    }
  }

  getProducts() {
    return this.http.get('https://dummyjson.com/products')
  }

  getProduct(num: any) {
    return this.http.get('https://dummyjson.com/products/' + num.id)
  }

  getUsers(login: string, password: string) {
    return fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: login,
        password: password,
      })
    })
      .then(res => res.json())
  }
}

