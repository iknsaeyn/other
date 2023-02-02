import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-check-resolve',
  templateUrl: './check-resolve.component.html',
  styleUrls: ['./check-resolve.component.scss']
})
export class CheckResolveComponent implements OnInit {
  query: string | undefined

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.query = this.route.snapshot.data['query']
    console.log(this.query)
  }




}
