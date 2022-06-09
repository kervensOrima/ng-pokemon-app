import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PokemonModule } from './pokemon/pokemon.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http' ;
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { LoginComponent } from './login/login.component';


@NgModule({
    declarations: [
        AppComponent ,
        PageNotFoundComponent,
        LoginComponent
    ],
    imports: [ 
        BrowserModule ,
        FormsModule ,
        HttpClientModule , 
        HttpClientInMemoryWebApiModule.forRoot( InMemoryDataService , { dataEncapsulation:false }) ,
        ReactiveFormsModule,
        PokemonModule ,
        AppRoutingModule         
    ],
    exports: [ ],
    providers: [ InMemoryDataService ],
    bootstrap: [ AppComponent ]
})


export class AppModule {

}


