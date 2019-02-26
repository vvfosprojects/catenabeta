import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { IXr33Modelli } from '../shared/interfaces';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

@Injectable({
  providedIn: 'root'
})

export class Xr33ModelliApiService {
  xr33ModelliAll: Observable<IXr33Modelli[]>;
  private BaseURLXr33Modelli: string ="https://localhost:5001/api/Xr33ModelliApi";  
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

  getAllXr33Modelli(): Observable<IXr33Modelli[]>{
    console.log("*******************getAllXr33Modelli*******************************");
    return this.httpClient.get<IXr33Modelli[]>(this.BaseURLXr33Modelli
    , { headers: this.setHeaders()
        //, params: httpParams
      }
    ) ;

  };
  
}

