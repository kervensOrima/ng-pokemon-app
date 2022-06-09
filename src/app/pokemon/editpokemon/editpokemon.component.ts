import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from '../Pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-editpokemon',
  template: `
    <h2 style="text-align: center;"> Editer pokemon </h2>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
    <ng-container style="margin:100px  auto; width:50%;" *ngIf="!pokemon">
       <app-loader></app-loader>
    </ng-container>
  `
})
export class EditpokemonComponent implements OnInit {

  pokemon:Pokemon | undefined ;

  constructor(
    private activatedRoute :ActivatedRoute ,
     private pokemonService:PokemonService ) { }

  ngOnInit(): void {
     const pokemonId:string | null = this.activatedRoute.snapshot.paramMap.get( 'id' ) ;
     if( pokemonId ){
        this.pokemonService.getPokemonById( +pokemonId ) 
        .subscribe(
          (response) => {
            this.pokemon = response
          }
        ) ;
     }
  }

}
