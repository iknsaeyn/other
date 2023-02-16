import { Component } from '@angular/core';
import { DataService } from 'src/app/_servisecs/data.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent {
  constructor(public dataService: DataService) { }

  posts: any

  allPosts() {
    this.dataService.getPosts().subscribe({ next: (res) => { this.posts = res } })
  }
}
