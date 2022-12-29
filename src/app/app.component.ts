import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(public title: Title, private meta: Meta) {
    this.meta.addTag({ property: 'og:desc', content: 'root_desc' })
  }
  // property, потому что, как я понял, подрузумивается OpenGraph, хотя desc я в прмерах не нашел.

  ngOnInit(): void {
    this.title.setTitle('Practice 1.7')
  }
}
