import { Component, OnInit } from '@angular/core';

import { Animal } from 'src/app/animal';
import { ListService } from 'src/app/services/list.service';



@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
 animals: Animal [] = [
  {name: 'marvin', type: 'dog', age:10 },
  {name: 'frida', type: 'cat', age: 5 },
  {name:'hotdog', type: 'dog', age:1 },
  {name: 'bob', type:'horse', age:2 },

 ];

 animalDetails = '';

 

  constructor(private listService: ListService) { }

  ngOnInit(): void {
  }

  showAge(animal: Animal): void {
    this.animalDetails = 'O pet ${animal.name} tem ${animal.age} anos!';
  }

  removeAnimal (animal: Animal){
    console.log('Removendo animal ...')
   this.animals = this.listService.remove(this.animals, animal);
  }
}
