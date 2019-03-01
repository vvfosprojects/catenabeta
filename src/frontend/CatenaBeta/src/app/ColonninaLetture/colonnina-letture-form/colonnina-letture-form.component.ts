import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Time } from '@angular/common';
import { Geometry,Point } from 'geojson';

import { Persona } from '../../model/Persona.component';
import { GeoCoordinata } from '../../model/GeoCoordinata.component';
import { CustomerService } from '../../core/customer.service';
import { Xr33ModelliApiService } from 'src/app/core/xr33Modelli-api.service';
import { IXr33Modelli, IColonnina, ILettura, IGeoCoordinata } from 'src/app/shared/interfaces';
import { CatenabetaApiService } from 'src/app/core/catenabeta-api.service';
import { ColonninaComponent } from 'src/app/Colonnina/colonnina/colonnina.component';
import { inspect } from 'util';
import * as jsPDF from 'jspdf'

@Component({
  selector: 'app-colonnina-letture-form',
  templateUrl: './colonnina-letture-form.component.html',
  styleUrls: ['./colonnina-letture-form.component.css']
})

export class ColonninaLettureFormComponent implements OnInit {
  public utente: Persona;
  public xr33All: Array<IColonnina> = null;
  public xr33Item: IColonnina;
  public xr33Lettura: ILettura;
  public tipologiaMonitoraggio: String;
  public oraInizio: Time;

  public xr33ModelliCampionamento: Array<IXr33Modelli> = null;
  public xr33ModelliMisurazione: Array<IXr33Modelli> = null;

  public ShowHideElement: string = "hidden";
  subTitle = 'Inserimento dei dati di una nuova misurazione';
  public statiMeteo: string[] = [
    "Sereno o poco nuvoloso"
    , "Generalmente poco nuvoloso"
    , "Da poco nuvoloso a nuvoloso"
    , "Nuvoloso"
    , "Generalmente nuvoloso"
    , "Da nuvoloso a coperto"
    , "Molto nuvoloso o coperto"
    , "Coperto"
    , "Generalmente coperto"
    , "Velato"
    , "Graduale aumento della nuvolosità"
    , "Graduali schiarite"
    , "Annuvolamenti sparsi, annuvolamenti irregolari o annuvolamenti temporanei"
    , "Schiarite irregolari o schiarite irregolari maggiori"
    , "Formazione di nuvolosità cumuliforme"
    , "Addensamenti"
    , "Nuvolosità variabile"
    , "Nuvolosità irregolare"
    , "Ampie schiarite"
  ]

  public classStepOne: string = '';
  public classStepTwo: string = '';
  public classStepThree: string = '';
  public classStepFour: string = '';
  public submitEnabled: boolean;
  public latitudineNord: IGeoCoordinata;
  public longitudineEst: IGeoCoordinata;

  statusStepOne: boolean;
  statusStepTwo: boolean;
  statusStepThree: boolean;
  statusStepFour: boolean;

  constructor(
    private router: Router
    , private customerService: CustomerService
    , private xr33ModelliApiService: Xr33ModelliApiService
    , private catenabetaApiService: CatenabetaApiService
    , private colonninaComponent: ColonninaComponent
  ) {
    if (customerService.isLogged()) {
      this.utente = customerService.getLoggedUser();

      this.latitudineNord = new GeoCoordinata();
      this.longitudineEst = new GeoCoordinata();
      console.log(this.utente);
    }
  }

  ngOnInit() {
    this.xr33ModelliApiService.getAllXr33ModelliCampionamento().subscribe((data: IXr33Modelli[]) => {
      this.xr33ModelliCampionamento = data;
    });

    this.xr33ModelliApiService.getAllXr33ModelliMisurazione().subscribe((data: IXr33Modelli[]) => {
      this.xr33ModelliMisurazione = data;
    });

    this.catenabetaApiService.getAllXr33().subscribe((data: IColonnina[]) => {
      this.xr33All = data;
    });
    this.xr33Item = {} as IColonnina;
    this.xr33Lettura = {} as ILettura;

    this.xr33Lettura.progressivoMisura = 1;
    this.xr33Lettura.geoCoordinate = { type: "Point", coordinates: [0, 0] };
    if (this.xr33Item.rilevamenti == null)
      this.xr33Item.rilevamenti = new Array<ILettura>();

    this.checkComplete();

  }

  faker() {
    this.xr33Item.id = "22222";
    this.xr33Item.idSede = "02.1000";
    this.xr33Item.matricolaStrumCampionamento = "asdasdas";
    this.xr33Item.modelloStrumCampionamento = "modello 1";
    this.xr33Item.provincia = "milano";
    this.xr33Item.regione = "lombardia";

    this.xr33Lettura.id = 31231232112;
    this.xr33Lettura.modelloStrumMisura = "modello 3";
    this.xr33Lettura.matricolaStrumMisura = "jkdfjkfdjks";
    this.xr33Lettura.nomeOperatore = "carlo";
    this.xr33Lettura.cognomeOperatore = "carli";
    this.xr33Lettura.dataCampionamento = new Date;
    this.xr33Lettura.dataInserimento = (new Date);
    this.xr33Lettura.progressivoMisura = 54;
    this.xr33Lettura.monitoraggioIntervento = true;
    this.xr33Lettura.monitoraggioSettimanale = !this.xr33Lettura.monitoraggioIntervento;
    this.xr33Lettura.CatenaMisuraEfficiente = true;
    this.xr33Lettura.volumeAriaAspirato = 11;
    this.xr33Lettura.condizioniMeteo = "sereno";
    this.xr33Lettura.luogoMisurazione = "fjkasdfjkdsj fsdkf sdk  f";

    this.latitudineNord = new GeoCoordinata();
    this.latitudineNord.UTM = 12.220555555555556;
    this.latitudineNord.GMS = "12°13'14\" N";
    this.latitudineNord.Gradi = 12;
    this.latitudineNord.Primi = 13;
    this.latitudineNord.Secondi = 14;
    this.longitudineEst = new GeoCoordinata();
    this.longitudineEst.UTM = 15.27138888888889;
    this.longitudineEst.GMS = "15°16'17\" E";
    this.longitudineEst.Gradi = 15;
    this.longitudineEst.Primi = 16;
    this.longitudineEst.Secondi = 17;

    this.xr33Lettura.letturaFiltroBianco = 22;
    this.xr33Lettura.letturaFiltroBianco2ore = 23;
    this.xr33Lettura.letturaFiltroNero = 24;
  }

  aggiorna(obj: GeoCoordinata) {
    var lastChar = obj.GMS.substr(obj.GMS.length - 1);
    console.log("***********" + lastChar);
    console.log(obj);

    switch (obj.GMS.substr(obj.GMS.length - 1)) {
      case ('N'):
      case ("S"):
        this.latitudineNord = obj;
        console.log("nord o sud");
        break;
      case ('E'):
      case ("O"):
        this.longitudineEst = obj;
        console.log("est o ovest");
        break;
    }

    this.xr33Lettura.geoCoordinate = { type: "Point", coordinates: [this.longitudineEst.UTM, this.latitudineNord.UTM] };

    console.log("posizione");
    console.log(this.xr33Lettura.geoCoordinate);
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

  CatenaEfficienteNoBtnOnChange(event: any): void {
    // this.clearLog();
    // let log = this.eventsLog.nativeElement;
    let checked = JSON.parse(event);   //returns true
    if (checked) {
      this.ShowHideElement = 'hidden';
      this.xr33Lettura.CatenaMisuraCausaInefficienza="";
    } else {
      this.ShowHideElement = 'visible';
    }
  }

  checkComplete() {
    this.stepOneComplete();
    this.stepTwoComplete();
    this.stepThreeComplete();
    this.stepFourComplete();
    this.submitEnabled = this.statusStepOne && this.statusStepTwo && this.statusStepThree && this.statusStepFour;
  }

  stepOneComplete() {
    if (
      !(this.xr33Lettura.nomeOperatore && this.xr33Lettura.cognomeOperatore)
      || !(this.xr33Lettura.dataCampionamento)
      || !(this.xr33Lettura.dataInserimento)
      || !(this.tipologiaMonitoraggio)
    ) {
      this.classStepOne = "";
      this.statusStepOne = false;
    }
    else {
      this.classStepOne = "bg-success text-white";
      this.statusStepOne = true;
    }
  }

  stepTwoComplete() {
    if (
      !(this.xr33Item.modelloStrumCampionamento && this.xr33Item.matricolaStrumCampionamento)
      || !(this.xr33Lettura.modelloStrumMisura && this.xr33Lettura.matricolaStrumMisura)
      || !(this.xr33Lettura.CatenaMisuraEfficiente)

    ) {
      this.classStepTwo = "";
      this.statusStepTwo = false;
    }
    else {
      this.classStepTwo = "bg-success text-white";
      this.statusStepTwo = true;
    }
  }

  stepThreeComplete() {

    if (
      !(this.xr33Lettura.volumeAriaAspirato > 0)
      || !(this.xr33Lettura.luogoMisurazione)
      || !(this.xr33Lettura.condizioniMeteo)
      || !(this.longitudineEst.UTM && this.latitudineNord.UTM)
    ) {
      this.classStepThree = "";
      this.statusStepThree = false;
    }
    else {
      this.classStepThree = "bg-success text-white";
      this.statusStepThree = true;
    }
  }

  stepFourComplete() {
    if (false) {
      this.classStepFour = "";
      this.statusStepFour = false;
    }
    else {
      this.classStepFour = "bg-success text-white";
      this.statusStepFour = true;
    }
  }

  submitted = false;
  onSubmit() {

    if (!this.submitted) {
      this.xr33Lettura.geoCoordinate.coordinates=[this.longitudineEst.UTM, this.latitudineNord.UTM];
      this.xr33Lettura.geoCoordinate.type="Point";
      this.xr33Lettura.geoCoordinate.bbox=null;

      this.xr33Lettura.utente = this.utente.UserName;
      this.xr33Lettura.dataCampionamento=new Date (this.xr33Lettura.dataCampionamento+" "+this.oraInizio);
      switch (this.tipologiaMonitoraggio) {
        case "Intervento":
          this.xr33Lettura.monitoraggioIntervento = true;
          this.xr33Lettura.monitoraggioSettimanale = false;
          break;
        case "Settimanale":
          this.xr33Lettura.monitoraggioIntervento = false;
          this.xr33Lettura.monitoraggioSettimanale = true;
          break;
        default:
          this.xr33Lettura.monitoraggioIntervento = false;
          this.xr33Lettura.monitoraggioSettimanale = false;
      }

      this.xr33Item.rilevamenti.push(this.xr33Lettura);
      console.log(JSON.stringify(this.xr33Lettura));


      this.catenabetaApiService.saveXr33(this.xr33Item).subscribe(
        res => {
          console.log(inspect(res));
        }
        , err => {
          console.log("status code--->" + inspect(err))
        }
      );
      console.log("submit");
    }
    this.submitted = true;
    this.submitEnabled = false;
  }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.xr33Lettura); }
}
