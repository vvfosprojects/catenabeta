import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {IStatoEfficienza} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})

export class LocalDataService {

  constructor() {}



  public statiEfficienzaGetAllEntries():Array<IStatoEfficienza> 
  {
    return  [
      {id: "Efficiente", descrizione: "Efficiente"},
      {id: "NonEfficiente", descrizione: "Non Efficiente"},
      {id: "Distrutto", descrizione: "Fuori Uso"},
      {id: "MessoMale", descrizione: "Temporaneamente Inefficiente"},
    ]

  }
  
}
