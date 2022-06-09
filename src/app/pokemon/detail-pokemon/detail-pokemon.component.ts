import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pokemon } from '../Pokemon.model';
import { PokemonService } from '../pokemon.service';
import { POKEMONS } from '../pokemons';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styleUrls: ['./detail-pokemon.component.css']
})
export class DetailPokemonComponent implements OnInit {

  pokemon:Pokemon | undefined ;
  // pokemonList:Pokemon[]= []

  constructor(
    private activatedRoute: ActivatedRoute ,
    private pokemonService:PokemonService ,
    private router:Router ) { }

  ngOnInit(): void {
    // this.pokemonList = this.pokemonService.getPokemonList() ;

    const id = +this.activatedRoute.snapshot.params['id'] ;

    // this.pokemon = this.pokemonList.find(
    //   (pokemon :Pokemon) => pokemon.id === id 
    // )
    this.pokemonService.getPokemonById( id) 
    .subscribe(
      ( response ) => {
        this.pokemon = response 
      }
    );
  }

  goToPokemon(id:number) {
    this.router.navigate( ['/edit/pokemon/' , id ])
  }

}
