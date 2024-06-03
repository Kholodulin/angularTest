import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideHttpClient } from '@angular/common/http';
import { provideClientHydration } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
     provideHttpClient(),
     importProvidersFrom([
      //HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService),
      BrowserAnimationsModule
    ]),
    provideRouter(routes),
    provideClientHydration(),
  ]
};
