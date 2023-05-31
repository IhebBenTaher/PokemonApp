import { Pokemon } from './pokemon';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of, tap } from 'rxjs';
@Injectable()
export class PokemonService {
  constructor(private http:HttpClient) { }
  getPokemonList():Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
      tap((pl)=>this.log(pl)),
      catchError((error)=>this.handleError(error,[]))
      )}
  private log(p:Pokemon|Pokemon[]|undefined){
    console.table(p)
  }
  private handleError(err:Error,errvalue:any){
    console.table(err);
    return of(errvalue);
  }
  getPokemonById(id:number):Observable<Pokemon|undefined>{
    return this.http.get<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((p)=>this.log(p)),
      catchError((error)=>this.handleError(error,undefined))
    )
  }
  getPokemonTypeList():string[]{
    return ['Feu','Eau','Plante','Insecte','Normal','Vol','Poison','Fée','Psy','Electrik','Combat']
  }
  updatePokemon(pokemon:Pokemon):Observable<null>{
    return this.http.put<Pokemon>(`api/pokemons/${pokemon.id}.json`,pokemon).pipe(
      tap((p)=>this.log(p)),
      catchError((error)=>this.handleError(error,null))
    )
  }
  deletePokemon(id:number):Observable<Pokemon>{
    return this.http.delete<Pokemon>(`api/pokemons/${id}`).pipe(
      tap((p)=>this.log(p)),
      catchError((error)=>this.handleError(error,null))
    )
  }
  addPokemon(pokemon:Pokemon):Observable<Pokemon>{
    return this.http.post<Pokemon>(`api/pokemons`,pokemon).pipe(
      tap((p)=>this.log(p)),
      catchError((error)=>this.handleError(error,null))
    )
  }
  searchPokemonList(name:string):Observable<Pokemon[]>{
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${name}`).pipe(
      tap((res)=>this.log(res)),
      catchError((err)=>this.handleError(err,[]))
    )
  }
}
