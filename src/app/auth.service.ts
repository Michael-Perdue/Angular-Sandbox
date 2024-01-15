import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private signedIn  = new BehaviorSubject<boolean>(false);
  
  get isSignedIn(){
    return this.signedIn
  }

  login(user:string, pass:string){
    this.signedIn.next(true)
  }


  public logout(){
    this.signedIn.next(false)
  }

}
