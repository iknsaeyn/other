import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ResolveEnd } from '@angular/router';

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

  usr!: any

  account!: any
  token!: string

  login: string = 'atuny0'
  passrod: string = '9uQFF1Lh'


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

  getUsers = (login: string, password: string) => {
    return new Promise((resolve, reject) => fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({

        username: login,
        password: password,
      })
    })
      .then(res => res.json())
      .then(res => this.account = res)
    )
  }
  getOneUser(id: number) {
    return this.http.get(' https://dummyjson.com/users/' + id)
  }
  view(): any {
    console.log(this.usr)
    console.log(this.account)
    console.log(this.token)
  }
}





