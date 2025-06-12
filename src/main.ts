import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient,withFetch} from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { routes } from './app/app.routes';
import { importProvidersFrom } from '@angular/core';
import { FormsModule } from '@angular/forms';

bootstrapApplication(AppComponent, {
  providers:[
    provideHttpClient(withFetch()),

    
    provideRouter(routes),
    importProvidersFrom(FormsModule)
  ]
})

  .catch((err) => console.error(err));
