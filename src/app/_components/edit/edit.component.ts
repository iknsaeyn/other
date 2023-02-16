import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/_servisecs/data.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.scss']
})
export class EditComponent {
  constructor(public dataService: DataService, private activatedRoute: ActivatedRoute) { }

  posts: any
  post: any
  id: any
  a!: any
  b!: string

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')
    this.post = this.dataService.dataI.find(x => x.id == this.id)
  }

  rep() {

  }

}



