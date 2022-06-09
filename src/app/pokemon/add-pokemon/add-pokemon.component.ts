import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon.model';

@Component({
  selector: 'app-add-pokemon',
  template: `
    <div>
       <h2>Add new pokemon</h2>
       <app-pokemon-form [pokemon]="pokemon">
       </app-pokemon-form>
    </div>
  `,
  styles: [
  ]
})
export class AddPokemonComponent implements OnInit {

  pokemon!:Pokemon

  constructor() { }

  ngOnInit(): void {
    this.pokemon = new Pokemon() 
  }

}
