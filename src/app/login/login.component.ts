import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  template: `
   <div class='row'>
    <div class="col s12 m4 offset-m4">
    <div class="card hoverable">
      <div class="card-content center">
        <span class="card-title">Page de connexion</span>
        <p><em>{{message}}</em></p>
      </div>
            <form #loginForm="ngForm">
          <div>
                    <label for="name">Name</label>
            <input type="text" id="name" [(ngModel)]="name" name="name" required>
          </div>
          <div>
            <label for="password">Password</label>
            <input type="password" id="password" [(ngModel)]="password" name="password" required>
          </div>
        </form>
      <div class="card-action center">
        <a (click)="login()" class="waves-effect waves-light btn"  >Se connecter</a>
        <a (click)="logout()">Se déconnecter</a>
      </div>
    </div>
    </div>
    </div>
  `
})
export class LoginComponent implements OnInit {

  message!:string ;
  name:string ;
  password:string ;

  constructor(
     private auth:AuthService ,
     private router:Router ) { }

  ngOnInit(): void {
  }

  login() {
    this.auth.login( this.name , this.password )
    .subscribe(
      (response)=> {
        this.setMessage()
        if(response){
          this.router.navigate( ['/pokemons'])
        }else{
          this.password = '' ;
          this.router.navigate(['/login'])
        }
      }
    )
  }

  setMessage(){
     if( this.auth.isLoggedIn){
       this.message ='Vous etes connete'
     }else{
      this.message ='Identifiant ou mot de passe incorrect'
     }
  }

  logout() {
    this.auth.logout() ;
    this.setMessage()
  }

}
