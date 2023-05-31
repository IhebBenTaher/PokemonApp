import { delay, Observable, of, tap } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogged:boolean=false
  redirectUrl:string
  login(name:string,password:string):Observable<boolean>{
    return of(name=="pikachu"&&password=="pikachu").pipe(
      delay(1000),
      tap(a=>this.isLogged=a)
    )
  }
  logout(){
    this.isLogged=false
  }
}
