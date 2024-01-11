import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
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

  ngOnInit() : void {
    interval(100000).subscribe(() => this.updateTemps());
    this.updateTemps();
  }
  updateTemps(){
    fetch("https://api.weatherapi.com/v1/current.json?key="+ environment.apiKey +"&q=LA1")
      .then((response)  =>{
        return response.json();
      })
      .then((json) =>{
        console.log(json["current"]);
        this.actualTemp = json["current"]["temp_c"];
        this.feelTemp = json["current"]["feelslike_c"];
      })
  }
}
