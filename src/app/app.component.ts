import { Component/*,OnInit */} from '@angular/core';
/*import { POKEMONS } from './mock-pokemons';
import { Pokemon } from './pokemon';*/

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent/* implements OnInit*/{
  /*pokemonList:Pokemon[]=POKEMONS;
  selectedPokemon:Pokemon;
  ngOnInit(): void {
    console.table(this.pokemonList);
  }
  selectPokemon(a:string){
    let b:Pokemon=this.pokemonList[(+a)-1];
    this.selectedPokemon=b;
    if(b){
      console.log("Le pokémon choisi est: "+this.selectedPokemon.name);
    }
    else{
      console.log("Pokémon inexistant!");
    }
  }*/
}