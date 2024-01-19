import { NotfoundComponent } from './notfound/notfound.component';
import { Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { SettingsComponent } from './settings/settings.component';
import { TimerComponent } from './timer/timer.component';
import {WeatherComponent} from "./weather/weather.component";
import { LoginComponent } from './login/login.component';
import { authGuard } from './auth.guard';
import { CreationComponent } from './creation/creation.component';

export const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "create", component: CreationComponent},
  {path: "clock", component: ClockComponent, canActivate: [authGuard]},
  {path: "settings", component: SettingsComponent, canActivate: [authGuard]},
  {path: "timer", component: TimerComponent, canActivate: [authGuard]},
  {path: "weather", component: WeatherComponent, canActivate: [authGuard]},
  {path: "404", component: NotfoundComponent},
  { path: '**', redirectTo: '404', pathMatch: 'full' }
];
