import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-frist-component',
  templateUrl: './frist-component.component.html',
  styleUrls: ['./frist-component.component.css']
})
export class FristComponentComponent implements OnInit {

  name:string = 'Camila';
  age: number= 27;
  job = 'Programadora Frontend'
  hobbies = ['correr', 'series', 'comer']
  car = {
    name:'polo',
    year:2019
  }
  constructor() { }

  ngOnInit(): void {
  }

}
