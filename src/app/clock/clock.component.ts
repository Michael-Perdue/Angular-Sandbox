import {Component, OnInit} from '@angular/core';
import {interval} from "rxjs";
import {SettingsComponent} from "../settings/settings.component";

@Component({
  selector: 'app-clock',
  standalone: true,
  imports: [
    SettingsComponent
  ],
  templateUrl: './clock.component.html',
  styleUrl: './clock.component.css'
})
export class ClockComponent implements OnInit{
  size = "small"
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
