import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Persona } from '../../model/Persona.component';
import { CustomerService } from '../../core/customer.service';


@Component({
  selector: 'app-colonnina-letture-form',
  templateUrl: './colonnina-letture-form.component.html',
  styleUrls: ['./colonnina-letture-form.component.css']
})

export class ColonninaLettureFormComponent implements OnInit {
  public utente: Persona;
  subTitle = 'Inserimento dei dati di una nuova misurazione';

  constructor(private router: Router, private customerService: CustomerService) {
    if (customerService.isLogged()) {
      this.utente = customerService.getLoggedUser();
      console.log(this.utente);
    }

  }


  ngOnInit() {
  }
  SettimanaleBtnOnChange(event: any): void {
    // this.clearLog(); 
    // let log = this.eventsLog.nativeElement;
    let checked = event.args.checked;
    if (checked) {
      //log.innerHTML += '<div><span>Checked: 12 Months Contract</span></div>';
    }
    else {
      //log.innerHTML += '<div><span>Unchecked: 12 Months Contract</span></div>';
    }
  }
  InterventoBtnOnChange(event: any): void {
    // this.clearLog();
    // let log = this.eventsLog.nativeElement;
    let checked = event.args.checked;
    if (checked) {
      //log.innerHTML += '<div><span>Checked: 6 Months Contract</span></div>';
    } else {
      //log.innerHTML += '<div><span>Unchecked: 6 Months Contract</span></div>';
    }
  }
}
