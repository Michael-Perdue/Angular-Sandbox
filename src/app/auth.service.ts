import { HttpClient, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  async requestLogin(url:string,user:string,pass:string){
    console.log(url + "?user=" + user + "&pass=" + pass)
    let response =  await fetch(url + "?user=" + user + "&pass=" + pass)
    let json = await response.json()
    return json;
  }
  
  async login(user:string, pass:string){
    let json = await this.requestLogin("https://localhost:7102/api/login/Get/User",user,pass);
    console.log(json)
    if(json){
        console.log(json)
        localStorage.setItem("loggedIn","true");
    }
  }


  logout(){
    localStorage.removeItem("loggedIn");
  }

}
