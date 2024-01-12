import { Injectable } from '@angular/core';
import {environment} from "../environment/environment";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor() { }

  async weatherService(){
    let response =  await fetch("https://api.weatherapi.com/v1/current.json?key=" + environment.apiKey + "&q=LA1")
    let json = await response.json()
    return json;
  }
}
