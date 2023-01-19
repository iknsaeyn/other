import { Component } from '@angular/core';

interface Books {
  title: string | null;
  author: string | null;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  books: Books[] = [{
    title: 'ВойнаИМир',
    author: 'ЛевТолстой'
  },
  {
    title: 'МаленькийПринц',
    author: 'АнтуанДеСентЭкзюпери'
  }
  ]

  creat_book = {
    title: null,
    author: null
  }

  create() {
    this.books.push({
      title: this.creat_book.title,
      author: this.creat_book.author
    })
  }
}
