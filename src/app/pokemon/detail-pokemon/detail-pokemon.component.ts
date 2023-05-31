import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, CanActivate } from '@angular/router';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit{
  constructor(private activatedRoute:ActivatedRoute, private router:Router,private pokemonService:PokemonService){
  }
  currentPokemon: Pokemon|undefined
  ngOnInit(){
    const currentId=this.activatedRoute.snapshot.paramMap.get("id");
    if(currentId){
      this.pokemonService.getPokemonById(+currentId).subscribe(e=>this.currentPokemon=e)
    }
    else{
      this.currentPokemon=undefined
    }
  }
  goBack(){
    this.router.navigateByUrl("");
  }
  goDelete(){
    if(this.currentPokemon)
    this.pokemonService.deletePokemon(this.currentPokemon.id).subscribe(()=>{this.router.navigate([""])})
  }
  goEdit(){
    this.router.navigate(["edit","pokemon",this.currentPokemon?.id])
  }
}
