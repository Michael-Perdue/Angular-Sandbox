import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  login(user:string, pass:string){
    localStorage.setItem("loggedIn","true");
  }


  logout(){
    localStorage.removeItem("loggedIn");
  }

}
