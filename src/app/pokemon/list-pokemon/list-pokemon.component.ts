import { Component, HostListener, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { Pokemon } from '../Pokemon.model';
import { PokemonService } from '../pokemon.service';
import { POKEMONS } from '../pokemons'

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styleUrls: ['./list-pokemon.component.css' ]
})
export class ListPokemonComponent implements OnInit   {

  constructor(private router:Router , private pokemonService :PokemonService) {} 

  pokemonList!:Pokemon [];

  text:string = 'Last'

  @HostListener('window:keydown.enter' , ['$event'])
  handleKeyDown(event:KeyboardEvent) {
    this.text = 'new value of texte '
  }

  @HostListener('window:keyup.enter' , ['$event'])
  @HostListener('window:keyup.shift.a' , ['$event'])
  @HostListener('window:keyup.shift.d' , ['$event'])
  handeleShiftA( event :KeyboardEvent ) {
    alert( 'Shift alertAAA' ) ;
  }


  ngOnInit(): void {
     this.pokemonService.getPokemonList()
     .subscribe(
       ( response:Pokemon[]) => {
         this.pokemonList = response
       } 
     )  ;
  }



  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log( 'After view init !!!')
  }

  onSelectPokemon(value:any) {
    console.log( value )
  }

  detail(id:number) : void {
    this.router.navigate(['/pokemon' , id ])
  }

  onDeleteById(id:number) {
    this.pokemonService.deletePokemonById(id )
    .subscribe(
      ()=>{
        this.router.navigate(['/pokemons' ])
      }
    )
  }
}
