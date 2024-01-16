import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {SettingsComponent} from "../settings/settings.component";
import {RouterLink} from "@angular/router";
import {NgIf} from "@angular/common";
import {sizes} from "../animations";
import {WeatherComponent} from "../weather/weather.component";
import { TranslateModule,TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [
    SettingsComponent,
    RouterLink,
    NgIf,
    WeatherComponent,
    TranslateModule
  ],
  animations: [
    sizes
  ],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit{
  size = 'big'

  constructor(private translateService:  TranslateService){}

  updateSize(updatedData: string) {
    this.size = updatedData;
  }

  time = "";
  ngOnInit() : void {
    this.updateTime();
    interval(1000).subscribe(() => this.updateTime());
  }
  updateTime() : void {
    const current = new Date()
    this.time = current.toLocaleTimeString()
  }
}
