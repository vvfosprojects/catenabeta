
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import {CoordinatesService, TransformationType, Direction} from 'angular-coordinates';

import { ColonninaComponent } from '../colonnina/colonnina.component';
import { CatenabetaApiService } from '../../core/catenabeta-api.service';
import { AnagTerritorioService } from  '../../core/anag-territorio.service';
import { LocalDataService } from  '../../core/local-data.service';

import { IColonnina, IRegione,IProvincia,IComando,IComune, IStatoEfficienza  } from 'src/app/shared/interfaces';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-colonnina-form',
  templateUrl: './colonnina-form.component.html',
  styleUrls: ['./colonnina-form.component.css']
})
export class ColonninaFormComponent implements OnInit {
  public model: IColonnina;
  public regioni: Array<IRegione> = null;
  public province: Array<IProvincia> = null;
  public comuni: Array<IComune> = null;
  public comandi: Array<IComando> = null;
  public utente: string="giuseppe.rirrama";
  public statiEfficienza: Array<IStatoEfficienza>=null;

  private direction:  Direction;
  private geolocation: any;
  private isValid: Boolean;
  private gradi: Number;
  private primi: Number;
  private secondi: Number;

  submitted = false;

  constructor( 
    private as: CatenabetaApiService
    , private ats: AnagTerritorioService
    , private ld: LocalDataService
    , private cs: CoordinatesService
    ) {
     }

  ngOnInit() {
    this.model = new ColonninaComponent(this.as);
    this.ats.getAllRegioni().subscribe((data: IRegione[])  => {
      this.regioni = data;
    });
    this.ats.getAllComandi().subscribe((data: IComando[]) =>{
      this.comandi=data;
    });
    this.statiEfficienza= this.ld.statiEfficienzaGetAllEntries();
  }

  onSubmit() { this.submitted = true; }

  RegioneDropDownChanged(val: any) {
    console.log(val);

      this.ats.getProvinceByCodRegione(val).subscribe((data: IProvincia[])  => {
        this.province = data;
      });
  }

  ProvinciaDropDownChanged(val: any) {
    console.log(val);
    // this.ats.getProvinceByCodRegione(val).subscribe((data: IProvincia[])  => {
    //   this.province = data;
    // });
  }

  ComandoDropDownChanged(val: any) {
    console.log(val);
    // this.ats.getProvinceByCodRegione(val).subscribe((data: IProvincia[])  => {
    //   this.province = data;
    // });
  }

  effSistemaDropDownChanged(val: any) {
    console.log(val);
    if(val!="Efficiente"){
      this.model.causaInefficienza="";

    }
  }

  disabilitaCausa() {
    console.log();
    if(this.model.effSistema =="Efficiente" || this.model.effSistema==null){
      this.model.causaInefficienza="";
      return true;
    }
  }
  onUTMChange(obj:any)
  {
    if(obj.name=="utmEst") {this.direction=Direction.Longitude;}
    if(obj.name=="utmNord") {this.direction=Direction.Latitude;}
   
    this.isValid = this.cs.isValueValid(obj.value,this.direction);
    if (this.isValid)
    {
      this.geolocation = this.cs.transform(obj.value, TransformationType.ToDegrees,this.direction);
      this.gradi=this.geolocation.slice(0,this.geolocation.indexOf('°'));
      this.primi=this.geolocation.slice(this.geolocation.indexOf('°')+1,this.geolocation.indexOf('\''));
      this.secondi=this.geolocation.slice(this.geolocation.indexOf('\'')+1,this.geolocation.indexOf('\"'));
    }else
    {
      this.gradi=this.primi=this.secondi=0;
    };
    
    switch (obj.name) {
      case 'utmNord': 
          this.model.greenNGradi=this.gradi;
          this.model.greenNPrimi=this.primi;
          this.model.greenNSecondi=this.secondi;
          break;
      case 'utmEst':
          this.model.greenEGradi=this.gradi;
          this.model.greenEPrimi=this.primi;
          this.model.greenESecondi=this.secondi;
          break;
      default:
          console.log('oggetto non riconosciuto');
    }
  }
}
