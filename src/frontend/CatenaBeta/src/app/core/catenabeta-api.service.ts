import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { IColonnina } from '../shared/interfaces';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable({
  providedIn: 'root'
})
export class CatenabetaApiService {
  xr33All: Observable<IColonnina[]>;
  private BaseURLColonninaBeta: string ="https://localhost:5001/api/Xr33Api";  
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

  getAllXr33(): Observable<IColonnina[]>{
    return  this.httpClient.get<IColonnina[]>(this.BaseURLColonninaBeta
    , { headers: this.setHeaders()
        //, params: httpParams
      }
    ) ;
  };
  
}

