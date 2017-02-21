import { enableProMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if(environment.production){
  enableProMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);