import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  custorders: any = {}
  ord: any = {};
  offertitle: string;

  constructor() { }

  ngOnInit(): void {
  }

}
