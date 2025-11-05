import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app';
// 1. Importa tu appConfig
import { appConfig } from './app/app.config';

// 2. Pasa el appConfig a la función bootstrap
bootstrapApplication(AppComponent, appConfig)
  .catch(err => console.error(err));