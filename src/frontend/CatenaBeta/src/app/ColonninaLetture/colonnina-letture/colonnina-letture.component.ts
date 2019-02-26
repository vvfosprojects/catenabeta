import { Component, OnInit } from '@angular/core';
import { IColonnina, ILettura, IPersona, IGeoCoordinata } from 'src/app/shared/interfaces';
import { Persona } from 'src/app/model/Persona.component';
import { GeoCoordinata } from 'src/app/model/GeoCoordinata.component';
import { CatenabetaApiService } from '../../core/catenabeta-api.service';
import {geoJson}  from 'leaflet';

@Component({
  selector: 'app-colonnina-letture',
  templateUrl: './colonnina-letture.component.html',
  styleUrls: ['./colonnina-letture.component.css']
})
export class ColonninaLettureComponent implements OnInit, ILettura {

  _id: Number;
  id: Number;
  utente: String;
  cognomeOperatore: String;
  nomeOperatore: String;

  dataCampionamento: Date;
  dataInserimento: Date;
  modelloStrumMisura: String;
  matricolaStrumMisura: String;

  progressivoMisura: number;
  monitoraggioSettimanale: Boolean;
  monitoraggioIntervento: Boolean;

  CatenaMisuraEfficiente: Boolean;
  CatenaMisuraCausaInefficienza: String;
  volumeAriaAspirato: number;
  condizioniMeteo: String;
  luogoMisurazione: String;
  geoCoordinate: geoJson;
  letturaFiltroBianco: Number;
  letturaFiltroBianco2ore: Number;
  letturaFiltroNero: Number;
  note: String;

  public Xr33LettureAll: Array<ILettura> = null;


  constructor(private catenabetaApiService: CatenabetaApiService) {
   
  }

  ngOnInit() {

  }
  public getAllEntries(idColonnina: string) {
  }

  aggiornaDati(obj)
  {
    console.log (obj);
  }
}
