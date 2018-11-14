import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import {IRegione,IProvincia,IComune,IComando} from '../shared/interfaces';

@Injectable({
  providedIn: 'root'
})
export class AnagTerritorioService {
  regioniAll: Observable<IRegione[]>;
  provincieAll: Observable<IProvincia[]>;
  comuniAll: Observable<IComune[]>;
  comandiAll: Observable<IComando[]>;

  private BaseURLAnagTerritorio: string ="https://localhost:5001/api/";  
  constructor(private  httpClient:  HttpClient) {}
  
  private setHeaders(): HttpHeaders {
    const headersConfig = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Origin': '*',
    };
    return new HttpHeaders(headersConfig);
  }

  private formatErrors(error: any) {
    return Observable.throw(error.json());
 }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }

  getAllRegioni(): Observable<IRegione[]>{
    return  this.httpClient.get<IRegione[]>(this.BaseURLAnagTerritorio+'Regioni'
    , { headers: this.setHeaders()
        //, params: httpParams
      }
    ) ;
  };

  getAllProvince(): Observable<IProvincia[]>{
    return  this.httpClient.get<IProvincia[]>(this.BaseURLAnagTerritorio+'Province'
    , { headers: this.setHeaders()
        //, params: httpParams
      }
    );
  };
  getProvinceByCodRegione(id: string): Observable<IProvincia[]>{
    return  this.httpClient.get<IProvincia[]>(this.BaseURLAnagTerritorio+'Province/ByCodRegioneGet/'+id
    , { headers: this.setHeaders()
        //, params: httpParams
      }
    );
  };

  getAllComuni(): Observable<IComune[]>{
    return  this.httpClient.get<IComune[]>(this.BaseURLAnagTerritorio+'Comuni'
    , { headers: this.setHeaders()
        //, params: httpParams
      }
    ) ;
  };

  getAllComandi(): Observable<IComando[]>{
    return  this.httpClient.get<IComando[]>(this.BaseURLAnagTerritorio+'Comandi'
    , { headers: this.setHeaders()
        //, params: httpParams
      }
    ) ;
  };
}
