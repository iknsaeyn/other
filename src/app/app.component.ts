import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { RequestsService } from './_services/requests.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private requestsService: RequestsService) { }

  getPosts() {
    this.requestsService.getPosts().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }
  getComments() {
    this.requestsService.getComments().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

  postEmpty() {
    this.requestsService.postEmpty().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

  checkError() {
    this.requestsService.checkError().subscribe({
      next: (response) => {
        console.log(response)
      },
      error: (err: HttpErrorResponse) => {
        console.log(`Ошибка ${err.status}`)
      }
    })
  }

  checkHeaders() {
    this.requestsService.checkHeaders().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }

  checkDelete() {
    this.requestsService.checkDelete().subscribe({
      next: (response) => {
        console.log(response)
      }
    })
  }


}
