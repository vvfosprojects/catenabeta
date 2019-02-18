import { NgModule, InjectionToken } from '@angular/core';
import { environment } from '../../environments/environment';

export let APP_CONFIG = new InjectionToken<AppConfig>('app.config');

export class AppConfig {
  apiCatenaBetaEndPoint: string;
  apiAnagTerritorioEndPoint: string;
  apiAuthEndPoint: string;
}

export const APP_DI_CONFIG: AppConfig = {
  apiCatenaBetaEndPoint: environment.apiCatenaBetaEndPoint,
  apiAnagTerritorioEndPoint: environment.apiAnagTerritorioEndPoint,
  apiAuthEndPoint:environment.apiAuthEndPoint,
};

@NgModule({
  providers: [{
    provide: APP_CONFIG,
    useValue: APP_DI_CONFIG
  }]
})
export class AppConfigModule { }