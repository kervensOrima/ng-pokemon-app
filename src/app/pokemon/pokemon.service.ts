import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, of, tap, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pokemon } from './Pokemon.model';

@Injectable()
export class PokemonService {

  httpOptions = {
    headers:new HttpHeaders({'Content-type' : 'application/json'})
  }

  constructor( 
    private http:HttpClient
  ) { }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>( `api/pokemons` , this.httpOptions )
    .pipe(
      tap( (response) => {
        this.log( response )
      }) ,
      catchError( 
        (error) => {
          return this.handleError( error , [] )
        }
      )
    )
  }

  getPokemonById(id: number): Observable<Pokemon | undefined> {
    // return POKEMONS.find(
    //   pokemon => pokemon.id == id
    // )
    return this.http.get<Pokemon>(`api/pokemons/${id}` , this.httpOptions )
    .pipe(
      tap( (response) => {
        this.log( response )
      }) ,
      catchError((error) => {
        return this.handleError( error , undefined )
      })
    )
  }

  updatePokemon(pokemon:Pokemon ):Observable<Pokemon | undefined > {
    return this.http.put( 'api/pokemons' , pokemon , this.httpOptions )
    .pipe(
      tap( (response) => {
        console.log( response )
      }) ,
      catchError((error) =>{
        return this.handleError( error , undefined )
      })
    )
  }

  deletePokemonById(id:number):Observable<null> {
    return this.http.delete( `api/pokemons/${id}` , this.httpOptions  )
    .pipe(
      tap( (response) =>{
        console.log( response )
      }) ,
      catchError( (error) =>{
        return this.handleError( error , undefined )
      })
    )
  }

  addPokemon(pokemon:Pokemon):Observable<Pokemon> {
    return this.http.post<Pokemon>( 'api/pokemons' , pokemon , this.httpOptions)
    .pipe(
      tap( (response:Pokemon)=>{
        this.log( response )
      }) ,
      catchError((error)=>{
        return this.handleError( error , null )
      })
    )
  }

  private log( response: null| Pokemon[] | Pokemon | undefined ) {
    console.log( response )
  }

  private handleError( error:Error , errorValue : any  ) {
    console.log( error )
    return of( errorValue ) 
  }

  getPokemonTypeList(): Array<string> {
    return [
      'Palante',
      'Eau',
      'Insecte', 
      'Normal', 
      'Electrik', 
      'Poison', 
      'Feu', 
      'Vol', 
      'Combat', 
      'Psy'
    ];
  }
}
