import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideRouter } from '@angular/router';
import RoutesConfig from './app/routes';
bootstrapApplication(AppComponent,{
  providers: [
    provideRouter(RoutesConfig),
  ],
})
  .catch(err => console.error(err));
