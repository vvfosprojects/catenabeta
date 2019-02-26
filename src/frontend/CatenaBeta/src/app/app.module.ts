import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ArchwizardModule } from 'angular-archwizard';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/sharedModule';
import { AppConfigModule } from './shared/app-config.module';
import { ColonninaComponent } from './Colonnina/colonnina/colonnina.component';
import { ColonninaFormComponent } from './Colonnina/colonnina-form/colonnina-form.component';
import { ColonninaLettureComponent } from './ColonninaLetture/colonnina-letture/colonnina-letture.component';
import { ColonninaLettureFormComponent } from './ColonninaLetture/colonnina-letture-form/colonnina-letture-form.component';
import { ColonninaLettureFormModule } from './ColonninaLetture/colonnina-letture-form/colonnina-letture-form.module';

import { LoginFormModule } from './login/login-form/login-form.module';
import { NeedAuthGuard } from './auth.guard/auth.guard.component';
import { MainMenuModule } from './main-menu/main-menu.module';
import { GeoCoordinateFormComponent } from './geo-coordinate/form/geo-coordinate-form.component';
import { GeoCoordinateViewComponent } from './geo-coordinate/view/geo-coordinate-view.component';
import {CoordinatesModule} from 'angular-coordinates';


@NgModule({
  declarations: [
    AppComponent,
    ColonninaComponent,
    ColonninaFormComponent,
    ColonninaLettureComponent,
    ColonninaLettureFormComponent,
    GeoCoordinateFormComponent,
    GeoCoordinateViewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    AppConfigModule,
    LoginFormModule,
    MainMenuModule,
    ArchwizardModule,
    ColonninaLettureFormModule,
    CoordinatesModule
  ],
  providers: [
    NeedAuthGuard
    ,ColonninaComponent
    , ColonninaLettureComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
