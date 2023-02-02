import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestsService {

  constructor(
    private http: HttpClient
  ) { }

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  getComments() {
    return this.http.get('https://jsonplaceholder.typicode.com/comments', { 'params': { postId: 1 } })
  }

  postEmpty() {
    return this.http.post('https://jsonplaceholder.typicode.com/posts', { 'body': {} })
  }

  checkError() {
    return this.http.get('https://jsonplaceholder.typicode.com/post')
  }

  checkHeaders() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts', { headers: { 'X-Test': '1' }, responseType: 'text' })
  }

  checkDelete() {
    return this.http.delete('https://jsonplaceholder.typicode.com/posts/1')
  }

  checkResolveText() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts/1', { responseType: 'text' })
  }

}
