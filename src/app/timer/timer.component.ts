import {Component, OnInit} from '@angular/core';
import {SettingsComponent} from "../settings/settings.component";
import {interval} from "rxjs";
import {NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {buttonSize, imgSize, sizes} from "../animations";
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
  animations: [sizes,buttonSize,imgSize],
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
  timeSec = 0;
  timeMin = 0;
  
  formatToDigits(num: number):string{
    return (num>9 ? "" : "0") + String(num);
  }

  timeString(){
    let str = "0s"
    if (this.time/60 >= 1){
      this.timeMin  = Number((this.time/60).toFixed(0))
      this.timeSec  = this.time % 60
    }
    else{
      this.timeSec = this.time
    }

  }

  ngOnInit() : void {
    interval(1000).subscribe(() => this.updateTime());
  }
  resetClick(){
    this.time = 0
    this.timeSec = 0;
    this.timeMin = 0;
  }
  handleClick(){
    this.clicked = !this.clicked;
  }
  updateTime() : void {
    if(this.clicked){
      this.time = this.time +=1
      this.timeString()
    }
    
  }
}
