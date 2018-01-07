import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { MDBBootstrapModules } from 'ng-mdb-pro';
import { MDBSpinningPreloader } from 'ng-mdb-pro';
import { AgmCoreModule } from '@agm/core';  // Google maps API Project name : CCC-Angular

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { ActualitesComponent } from './components/actualites/actualites.component';
import { DocumentsComponent } from './components/documents/documents.component';
import { PhotosComponent } from './components/photos/photos.component';
import { MembresComponent } from './components/membres/membres.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SortiesMensuellesInMemoryDataService } from './services/sorties-mensuelles-in-memory-data.service';
import { EvenementsInMemoryDataService } from './services/evenements-in-memory-data.service';
import { EvenementsService } from './services/evenements.service';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ActualitesComponent,
    DocumentsComponent,
    PhotosComponent,
    MembresComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MDBBootstrapModules.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyB8iupvnjV-Xn98b0Smx88xR881UY5PU7k'}),
    RouterModule.forRoot(ROUTES),
    HttpClientInMemoryWebApiModule.forRoot(SortiesMensuellesInMemoryDataService),
    HttpClientInMemoryWebApiModule.forRoot(EvenementsInMemoryDataService)
  ],
  providers: [
    MDBSpinningPreloader,
    EvenementsService
  ],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }

