import { Component, OnInit } from '@angular/core';
import { 
        IColonnina,ILettura,IColonninaLetture} from '../../shared/interfaces';
import { CatenabetaApiService } from  '../../core/catenabeta-api.service';

import { Observable } from 'rxjs';
import { ObserveOnSubscriber } from 'rxjs/internal/operators/observeOn';

@Component({
  selector: 'app-colonnina',
  templateUrl: './colonnina.component.html',
  styleUrls: ['./colonnina.component.css']
})
export class ColonninaComponent implements OnInit,IColonnina {
  _id: String;
  id: String;
  idSede: String;
  dataInserimento: Date;
  usernameOperatore: String;
  regione: String;
  provincia: String;
  effSistema: String;
  causaInefficienza: String;
  tipologia: Number;
  luogo: String;
  sistema: String;
  utmFuso: Number;
  utmEst: Number;
  utmNord: Number;
  greenEGradi: Number;
  greenEPrimi: Number;
  greenESecondi: Number;
  greenNGradi: Number;
  greenNPrimi: Number;
  greenNSecondi: Number;
  letture: ILettura[]

  isVisible = true;
  public Xr33All: Array<IColonnina> = null;
 

  constructor(private catenabetaApiService: CatenabetaApiService) {
   }

  ngOnInit() {
    this.getAllEntries();
  }
  public  getAllEntries() {
    var tmp=this.catenabetaApiService.getAllXr33()
    .subscribe((data: IColonnina[])  => {
      this.Xr33All = data;
    });
}
  switcher () {
    this.isVisible=!this.isVisible;
  }

}
