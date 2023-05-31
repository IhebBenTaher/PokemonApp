import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-edit-pokemon',
  template: `
    <h2 class="center">Editer {{pokemon?.name}}</h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture"/>
    </p>
    <app-pokemon-form *ngIf="pokemon" [pokemon]="pokemon"></app-pokemon-form>
  `})
export class EditPokemonComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute,private pokemonService:PokemonService){}
  ngOnInit(): void {
    const id:string|null=this.activatedRoute.snapshot.paramMap.get('id')
    id?this.pokemonService.getPokemonById(+id).subscribe(e=>this.pokemon=e):this.pokemon=undefined;
  }
  pokemon:Pokemon|undefined
}
