import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aereos',
  templateUrl: './aereos.component.html',
  styleUrls: ['./aereos.component.css']
})
export class AereosComponent implements OnInit {
  aero:boolean = true
  search:boolean = null
  results: boolean = null
  flights = [
    {"id":1,"name":"Licensed Frozen Hat","description":"Incidunt et magni","price":"170.00","quantity":56840},
    {"id":2,"name":"Rustic Concrete Chicken","description":"Sint libero mollitia","price":"302.00","quantity":9358},
    {"id":3,"name":"Fantastic Metal Computer","description":"In consequuntur cupiditat","price":"279.00","quantity":90316},
    {"id":4,"name":"Refined Concrete Chair","description":"Saepe nemo praesentium","price":"760.00","quantity":5899}
];


  constructor() {
    this.aero = true
   }

  ngOnInit(): void {
  }

  goFlight(){
    console.log('hello');
    this.aero = false
    this.search = true
  }

  searchF(){
    console.log('hello');
    
    this.search = false
    this.results = true
  }

}
