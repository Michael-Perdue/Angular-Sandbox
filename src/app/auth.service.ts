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
    console.log(response)
    return response;
  }
  
  async login(user:string, pass:string){
    let response = await this.requestLogin("https://localhost:7102/api/login/Get/User",user,pass);
    console.log(response)
    try{
      if(response["status"] == 200){
          console.log(response)
          localStorage.setItem("loggedIn","true");
      }
    }catch(error){console.log(error)}
  }


  logout(){
    localStorage.removeItem("loggedIn");
  }

}
