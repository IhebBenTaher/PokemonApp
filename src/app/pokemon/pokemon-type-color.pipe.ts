import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pokemonTypeColor'
})
export class PokemonTypeColorPipe implements PipeTransform {

  transform(value:string): string {
    switch(value){
      case "Feu":return "chip red lighten-1";
      case "Eau":return "chip blue lighten-1";
      case "Plante":return "chip green lighten-1";
      case "Insecte":return "chip brown lighten-1";
      case "Normal":return "chip grey lighten-3";
      case "Vol":return "chip blue lighten-3";
      case "Poison":return "chip deep-purple accent-1";
      case "Fée":return "chip pink lighten-4";
      case "Psy":return "chip deep-purple darken-2";
      case "Electrik":return "chip lime accent-1";
      case "Combat":return "chip deep-orange";
      default:return "chip grey";
    }
  }

}
