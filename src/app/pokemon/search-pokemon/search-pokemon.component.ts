import { PokemonService } from './../pokemon.service';
import { debounceTime, distinctUntilChanged, switchMap, Observable, Subject } from 'rxjs';
import { Router } from '@angular/router';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
})
export class SearchPokemonComponent{
  constructor(private router:Router,private pokemonService:PokemonService){}
  pokemons$:Observable<Pokemon[]>
  search(term:string){
    if(term.length>1)
    this.pokemons$=this.pokemonService.searchPokemonList(term)
  }
  goToDetail(pokemon:Pokemon){
    this.router.navigate(['pokemon',pokemon.id])
  }
}
