import {Injectable} from '@angular/core';
import { Persona } from '../model/Persona.component';

const TOKEN = 'loggedUser';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  setLoggedUser(token: Persona): void {
    localStorage.setItem(TOKEN, JSON.stringify(token));
  }

  getLoggedUser(): Persona {
    return JSON.parse(localStorage.getItem(TOKEN)); 
  }


  isLogged() {
    return localStorage.getItem(TOKEN) != null;
  }
}