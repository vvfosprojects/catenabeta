import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {CoordinatesService} from 'angular-coordinates';

import { SorterService } from './sorter.service';
import { CatenabetaApiService } from './catenabeta-api.service';
import { Xr33ModelliApiService } from './xr33Modelli-api.service';
import { AnagTerritorioService } from './anag-territorio.service';
import { LocalDataService } from './local-data.service';
import { CustomerService } from './customer.service';

@NgModule({
    imports: [ HttpClientModule ],
    providers: [ 
        SorterService, 
        CatenabetaApiService, 
        Xr33ModelliApiService,
        AnagTerritorioService,
        LocalDataService,
        CoordinatesService,
        CustomerService
     ]
})
export class CoreModule { }