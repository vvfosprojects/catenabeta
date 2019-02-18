import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomerService } from '../core/customer.service';
import { Persona } from '../model/Persona.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {
  public utente: Persona;
  subTitle = "Menù Principale";

  constructor(
    private customerService: CustomerService
  ) {
    if (customerService.isLogged()) {
      this.utente = customerService.getLoggedUser();
      console.log(this.utente);
    }
  }

  ngOnInit() {
  }

}
