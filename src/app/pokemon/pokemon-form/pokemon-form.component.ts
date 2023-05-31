import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from './../pokemon.service';
import { Pokemon } from './../pokemon';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls:['./pokemon-form.component.css']
})
export class PokemonFormComponent implements OnInit{
  @Input() pokemon:Pokemon
  pokemonTypeList:string[]
  isAdd:boolean
  constructor(private pokemonService:PokemonService,private router:Router){}
  ngOnInit(): void {
    this.pokemonTypeList=this.pokemonService.getPokemonTypeList()
    this.isAdd=this.router.url.includes("add")
  }
  hasType(type:string):boolean{
    return this.pokemon.types.includes(type)
  }
  selectType($event:Event,type:string){
    const isChecked=($event.target as HTMLInputElement).checked
    isChecked?this.pokemon.types.push(($event.target as HTMLInputElement).value):this.pokemon.types.splice(this.pokemon.types.indexOf(type),1)
  }
  isTypesValid(type:string):boolean{
    if(this.pokemon.types.length==1 && this.hasType(type)){
      return false
    }
    if(this.pokemon.types.length>2 && !this.hasType(type)){
      return false
    }
    return true
  }
  onSubmit(){
    if(this.isAdd){
      this.pokemonService.addPokemon(this.pokemon).subscribe((pokemon)=>this.router.navigate(['pokemon',pokemon.id]))
    }
    else{
      this.pokemonService.updatePokemon(this.pokemon).subscribe(()=>this.router.navigate(['pokemon',this.pokemon.id]));
    }
  }
}
