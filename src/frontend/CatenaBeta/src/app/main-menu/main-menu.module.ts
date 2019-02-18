import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MainMenuComponent } from './main-menu.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    

  ],
  declarations: [MainMenuComponent],
  exports: [
    MainMenuComponent
  ]
})
export class MainMenuModule { 
}

