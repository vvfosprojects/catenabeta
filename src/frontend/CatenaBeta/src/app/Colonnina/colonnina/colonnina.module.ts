import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule }      from '@angular/forms';

import { ColonninaComponent } from './Colonnina.component';
import { ColonninaLettureComponent } from '../../ColonninaLetture/colonnina-letture/colonnina-letture.component';
//import { FilterTextboxComponent } from './Xr33-list/filter-textbox.component';
import { SharedModule } from '../../shared/sharedModule';


@NgModule({
  declarations: [
    ColonninaComponent,
    ColonninaLettureComponent,
    //FilterTextboxComponent
  ],
  imports: [
    
    CommonModule,SharedModule, FormsModule
  ],
  providers: [],
  exports: [ ColonninaComponent ]
})
export class Xr33Module { }
