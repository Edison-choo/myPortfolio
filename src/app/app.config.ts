import { ApplicationConfig } from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';

import routeConfig from './routes';
import { provideProtractorTestingSupport } from '@angular/platform-browser';

export const appConfig: ApplicationConfig = {
  providers: [
      provideProtractorTestingSupport(),
      provideAnimations(),
      provideRouter(routeConfig, withViewTransitions())
  ]
};
