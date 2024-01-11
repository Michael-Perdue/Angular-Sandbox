import {Component, OnInit} from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";
import {interval} from "rxjs";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {buttonSize, sizes} from "../animations";
import {WeatherComponent} from "../weather/weather.component";

@Component({
  selector: 'app-timer',
  standalone: true,
    imports: [
        SettingsComponent,
        NgIf,
        RouterLink,
        WeatherComponent
    ],
  animations: [sizes,buttonSize],
  templateUrl: './timer.component.html',
  styleUrl: './timer.component.css'
})
export class TimerComponent implements OnInit {
  size = "big"
  clicked = false
  updateSize(updatedData: string) {
    this.size = updatedData;
  }
  time = 0;

  ngOnInit() : void {
    interval(1000).subscribe(() => this.updateTime());
  }
  resetClick(){
    this.time = 0
  }
  handleClick(){
    this.clicked = !this.clicked;
  }
  updateTime() : void {
    if(this.clicked)
      this.time = this.time +=1
  }
}
