import { Routes } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import {ActualitesComponent} from './components/actualites/actualites.component';
import {DocumentsComponent} from './components/documents/documents.component';
import {PhotosComponent} from './components/photos/photos.component';
import {MembresComponent} from './components/membres/membres.component';

export const ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'actualites', component: ActualitesComponent },
  { path: 'documents', component: DocumentsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'membres', component: MembresComponent },
];
