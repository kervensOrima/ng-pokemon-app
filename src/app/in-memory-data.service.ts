import { Injectable } from '@angular/core';
import { Pokemon } from './pokemon/Pokemon.model';
import { POKEMONS } from './pokemon/pokemons';
import { InMemoryDbService } from 'angular-in-memory-web-api' ;

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService  implements InMemoryDbService  {

  createDb(){
    const pokemons:Pokemon[] = POKEMONS ;
    // console.table( pokemons )
    return { pokemons } ;
  }


}
