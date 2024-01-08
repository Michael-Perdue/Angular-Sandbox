import { Routes } from '@angular/router';
import { ClockComponent } from './clock/clock.component';
import { SettingsComponent } from './settings/settings.component';
export const routes: Routes = [
  {path: "", component: SettingsComponent,children: [{path: "", component: ClockComponent}]},

];
