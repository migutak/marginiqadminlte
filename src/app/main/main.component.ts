import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  isCust: boolean = false;
  isBank: boolean = true;
  username: string;

  constructor() { }

  ngOnInit(): void {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.username = currentUser.userName;
    if(currentUser.partnerID == '01') {
      this.isCust = true;
      this.isBank = false;
    } else {
      this.isCust = false;
      this.isBank = true;
    }
    console.log(currentUser);
  }

}
