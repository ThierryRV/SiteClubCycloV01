import { Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent }/*,
    {
    path: 'races',
    children: [
      { path: '', component: RacesComponent },
      { path: ':raceId', component: BetComponent },
      { path: ':raceId/live', component: LiveComponent }
    ]
  },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent }*/
];
