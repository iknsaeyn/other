import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_servisecs/data.service';

@Component({
  selector: 'app-show-post',
  templateUrl: './show-post.component.html',
  styleUrls: ['./show-post.component.scss']
})
export class ShowPostComponent implements OnInit {
  constructor(public dataService: DataService, private activatedRoute: ActivatedRoute) { }

  posts: any
  post: any
  id: any

  ngOnInit() {
    this.dataService.getPosts().subscribe({ next: (res) => { res } })
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.post = this.dataService.dataI.find(x => x.id == this.id)
  }

}
