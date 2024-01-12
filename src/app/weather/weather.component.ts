import {Component, inject, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {ApiService} from "../api.service";
import {environment} from "../../environment/environment";

@Component({
  selector: 'app-weather',
  standalone: true,
  imports: [],
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.css'
})
export class WeatherComponent implements OnInit{
  actualTemp = 0;
  feelTemp = 0;
  constructor(private apiService: ApiService) {}

  ngOnInit() : void {
    interval(100000).subscribe(() => this.updateTemps());
    this.updateTemps();
  }
  async updateTemps(){
    try {
      const json = await this.apiService.weatherService("LA1");
      console.log(json["current"]);
      this.actualTemp = json["current"]["temp_c"];
      this.feelTemp = json["current"]["feelslike_c"];
    }catch (error){
      console.log("error getting weather")
    }
  }
}
