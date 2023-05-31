import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  constructor(public authService:AuthService,private router:Router){}
  message:string="Vous êtes déconnecté. {pikachu/pikachu}"
  name:string
  password:string
  login(){
    this.authService.login(this.name,this.password).subscribe((res)=>{
      if(res){
        this.message="Vous êtes connecté."
        this.router.navigate(['pokemons'])
      }else{
        this.message="Identifiant ou mot de passe incorrect"
        this.name=""
        this.password=""
      }
    })
  }
  logout(){
    this.authService.logout()
    this.message="Vous êtes déconnecté."
  }
}
