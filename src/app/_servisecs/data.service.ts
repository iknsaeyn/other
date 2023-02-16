import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  role: 'user' | 'admin' = 'user'
  id!: number

  getPosts() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
  }

  dataI = [
    {
      "userId": 3,
      "id": 22,
      "title": "dolor sint quo a velit explicabo quia nam",
      "body": "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
    },
    {
      "userId": 5,
      "id": 46,
      "title": "aut quo modi neque nostrum ducimus",
      "body": "voluptatem quisquam iste\nvoluptatibus natus officiis facilis dolorem\nquis quas ipsam\nvel et voluptatum in aliquid"
    },
  ]




  askForId(num: number) {
    this.id = num
  }

}
