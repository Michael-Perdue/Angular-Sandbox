import { Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';
export const routes: Routes = [
  {path: "", component: ClockComponent},
  {path: "settings", component: SettingsComponent},
  {path: "timer", component: TimerComponent}
];
