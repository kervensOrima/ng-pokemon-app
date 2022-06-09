import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Pokemon } from '../Pokemon.model';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-form',
  templateUrl :'./pokemon-form.component.html',
  styleUrls: [ 'pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit {

  public types:Array<String> ;
  isAddForm:boolean = false ;

  @Input() pokemon!:Pokemon ;

  constructor( private pokemonService:PokemonService , private router:Router ) { }

  ngOnInit(): void {
    this.types = this.pokemonService.getPokemonTypeList() ;

    this.isAddForm  =  this.router.url.includes('add') ; //tester si le router contient le mot cle add
  }

  public hasType(type:String) :boolean {
    //le methode includes permet de rechercher si une chaine se trouve dans n array en revoie un boolean
    return this.pokemon?.types?.includes( type.toString() ) ;
  }

  public selectType( $event:Event , type:String ){
    const isChecked :boolean = ( $event.target as HTMLInputElement).checked ;

    if( isChecked ){
      //push pour ajouter un nouvel element dans array
     this.pokemon?.types?.push( type.toString() )
    }else {
       //indexOf recuperer l'index de l'element passer en parametre
       const index :number = this.pokemon?.types?.indexOf( type.toString()) ; 
       //splice supprimer un element dans un array a partir son index
       this.pokemon?.types?.splice( index , 1 ) ;
     }
    //  console.log( this.pokemon.types )
  }

  public isTypesValid(type:String) :boolean{

    if( this.pokemon?.types?.length === 1 && this.hasType( type.toString() )) {
      return false ;
    }

    if( this.pokemon?.types?.length > 2 && !this.hasType( type.toString() ) ){
      return false ;
    }

    return true ;
  }


  onSubmit(form:NgForm ){
    if( this.isAddForm ){
       this.pokemonService.addPokemon( this.pokemon )
       .subscribe(
         (pokemon:Pokemon) => {
           console.log( pokemon )
           this.router.navigate( ['/pokemon' , pokemon.id ] )
         }
       )
    }else{
      this.pokemonService.updatePokemon( this.pokemon )
      .subscribe(
        () => {
           this.router.navigate( ['/pokemon' , this.pokemon.id ] )
        }
      )
    }
  
  }

}
