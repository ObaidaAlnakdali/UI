import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }
@Input () img = "url('../../assets/img/hero-bg.jpg') top right" ;

  ngOnInit(): void {

  }

}