import { Injectable } from '@angular/core';
import { catchError, delay, Observable, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  isLoggedIn:boolean = false ;

  login(name:string , password :string ) :Observable<boolean>{
    const isLogin = ( name === 'ocodeur' && password === 'ocodeur')

    return of( isLogin ).pipe(
      delay(1000) ,
      tap( (result) => {
        this.isLoggedIn = result
      }) ,
      catchError( (error) => {
        console.log( error )
        return of(false)
      })
    )
  }

  logout() {
    this.isLoggedIn = false ;
  }
}

