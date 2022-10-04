import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-condicional',
  templateUrl: './condicional.component.html',
  styleUrls: ['./condicional.component.css']
})
export class CondicionalComponent implements OnInit {
 canShow: boolean = true;
 name = 'Igor';
  constructor() { }

  ngOnInit(): void {
  }

}
