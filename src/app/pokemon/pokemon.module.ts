import { PokemonService } from './pokemon.service';
import { PokemonTypeColorPipe } from './pokemon-type-color.pipe';
import { BorderCardDirective } from './border-card.directive';
import { DetailPokemonComponent } from './detail-pokemon/detail-pokemon.component';
import { ListPokemonComponent } from './list-pokemon/list-pokemon.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { PokemonFormComponent } from './pokemon-form/pokemon-form.component';
import { EditPokemonComponent } from './edit-pokemon/edit-pokemon.component';
import { AddPokemonComponent } from './add-pokemon/add-pokemon.component';
import { SearchPokemonComponent } from './search-pokemon/search-pokemon.component';
import { LoaderComponent } from './loader/loader.component';
import { AuthGuard } from '../auth.guard';

const routes: Routes = [{path:"pokemons",component:ListPokemonComponent,canActivate:[AuthGuard]},
{path:"pokemon/:id",component:DetailPokemonComponent,canActivate:[AuthGuard]},
{path:"edit/pokemon/:id",component:EditPokemonComponent,canActivate:[AuthGuard]},
{path:"add/pokemon",component:AddPokemonComponent,canActivate:[AuthGuard]}]
@NgModule({
  declarations: [ListPokemonComponent,DetailPokemonComponent,BorderCardDirective,PokemonTypeColorPipe, PokemonFormComponent, EditPokemonComponent, AddPokemonComponent, SearchPokemonComponent, LoaderComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  providers:[PokemonService]
})
export class PokemonModule { }
