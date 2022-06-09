import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { RouterModule, Routes } from '@angular/router';
import { PokemonService } from './pokemon.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditpokemonComponent } from './editpokemon/editpokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const routes :Routes = [
  { path: 'pokemons' , component:ListPokemonComponent , canActivate: [AuthGuard] } ,
  { path: 'pokemon/add' , component:AddPokemonComponent , canActivate: [AuthGuard] } ,
  { path: 'edit/pokemon/:id' , component:EditpokemonComponent , canActivate: [AuthGuard]  } ,
  { path: 'pokemon/:id' , component:DetailPokemonComponent , canActivate: [AuthGuard]  } 
]

@NgModule({
  declarations: [
    DetailPokemonComponent ,
    ListPokemonComponent ,
    PokemonTypeColorPipe ,
    BorderCardDirective,
    PokemonFormComponent,
    EditpokemonComponent,
    AddPokemonComponent,
    LoaderComponent ,
   
      
  ],
  imports: [
    CommonModule ,
    ReactiveFormsModule ,
    FormsModule ,
    RouterModule.forChild( routes )
  ] ,
  providers : [ 
    PokemonService 
  ]
})
export class PokemonModule { }
