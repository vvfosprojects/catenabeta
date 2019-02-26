import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { CoordinatesService, TransformationType, Direction, CoordinatesComponent } from 'angular-coordinates';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import { Observer } from 'rxjs/Observer';
import { GeoCoordinata } from 'src/app/model/GeoCoordinata.component';

@Component({
  selector: 'app-geo-coordinate-view',
  templateUrl: './geo-coordinate-view.component.html',
  styleUrls: ['./geo-coordinate-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeoCoordinateViewComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  @Input() id: string;
  @Input() direction: string;
  @Input() utmVisible: Boolean;
  @Input() gmsVisible: Boolean;
  @Input() geolocation: GeoCoordinata;

  public gradi: number;
  public primi: number;
  public secondi: number;
  public utm: number;
  public gms: string;

  geolocationValid: boolean;
  tmpUtm: String[];
  tmpGMS: number | string;
  public errorMessage: string="prova";

  private coordinatesService: CoordinatesService;

  constructor(_coordinatesService: CoordinatesService, private ref: ChangeDetectorRef) {
    this.coordinatesService = _coordinatesService;
    setInterval(() => {
      this.aggiornaDati();
      // require view to be updated
      this.ref.markForCheck();
    }, 1000);
  }

  ngOnInit() {
    this.aggiornaDati();
  }

  DirectionSet() {
    return (this.direction.toLowerCase() == "latitudine") ? Direction.Latitude : Direction.Longitude;
  }
  private aggiornaDati() {
    this.geolocationValid = this.coordinatesService.isValidDegree(this.geolocation.GMS, this.DirectionSet());


    this.utm = this.geolocation.UTM;
    this.gms = this.geolocation.GMS;
    this.gradi = this.geolocation.Gradi;
    this.primi = this.geolocation.Primi;
    this.secondi = this.geolocation.Secondi;
    this.errorMessage=this.geolocationValid?'':"Coordinate non valide";

  }
}
