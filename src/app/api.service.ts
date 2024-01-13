import {Injectable} from '@angular/core';
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  postcode = "LA1"

  constructor() { }
  
  async weatherService(){
    let response =  await this.requestService("https://api.weatherapi.com/v1/current.json","&q=" +this.postcode)
    return await response;
  }

  async requestService(url:string,args:string){
    console.log(url + "?key=" + environment.apiKey + args)
    let response =  await fetch(url + "?key=" + environment.apiKey + args)
    let json = await response.json()
    return json;
  }
}
