import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CoreModule } from './core/core.module';
import { FormsModule }   from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/sharedModule';
import { ColonninaComponent } from './Colonnina/colonnina/colonnina.component';
import { ColonninaFormComponent } from './Colonnina/colonnina-form/colonnina-form.component';
import { ColonninaLettureComponent } from './ColonninaLetture/colonnina-letture/colonnina-letture.component';
import { ColonninaLettureFormComponent } from './ColonninaLetture/colonnina-letture-form/colonnina-letture-form.component';


@NgModule({
  declarations: [
    AppComponent,
    ColonninaComponent,
    ColonninaFormComponent,
    ColonninaLettureComponent,
    ColonninaLettureFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    NgbModule.forRoot(), 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
