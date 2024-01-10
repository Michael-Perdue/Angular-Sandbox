import {Component, Inject} from '@angular/core';
import {CommonModule, DOCUMENT} from '@angular/common';
import {RouterLink, RouterOutlet} from '@angular/router';
import {ClockComponent} from "./clock/clock.component";
import {SettingsComponent} from "./settings/settings.component";
import {TimerComponent} from "./timer/timer.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, ClockComponent, SettingsComponent, TimerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
}
