import {Component} from '@angular/core';
import {Router} from '@angular/router';

import {ApiAuthService} from '../../core/api-auth.service';
import {CustomerService} from '../../core/customer.service';
import {IPersona} from '../../shared/interfaces';
import {Persona} from '../../model/Persona.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})

export class LoginFormComponent {
  userName = '';
  password = '';
  utenteLoggato: Persona;

  constructor(private apiAuth: ApiAuthService, private customer: CustomerService, private router: Router) {  }

  tryLogin() {

    this.apiAuth.login(
      this.userName,
      this.password
    )
      .subscribe(
        r => {
          if (r.token) {
            this.utenteLoggato=Persona.create({
              Codice:"",
              UserName: this.userName,
              Nome:"Giuseppe",
              Cognome:"Rirrama",
              CodiceUO:"02.1000",
              DescrizioneUO:"Comando Provinciale VV.F. Milano",
              CodiceFiscale:"rrrrrrrrrrr",
              NomeQualifica:"CTI",
              CodiceTurno:"G",
              CodiceDominio:"dipvvf.it"
            });
            this.customer.setLoggedUser(this.utenteLoggato);
            this.router.navigateByUrl('');
          }
        },
        r => {
          alert(r.error.error);
        });
  }
}
