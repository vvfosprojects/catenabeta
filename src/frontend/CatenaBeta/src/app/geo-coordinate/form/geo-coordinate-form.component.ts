import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CoordinatesService, TransformationType, Direction } from 'angular-coordinates';
import { GeoCoordinata } from '../../model/GeoCoordinata.component';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-geo-coordinate-form',
  templateUrl: './geo-coordinate-form.component.html',
  styleUrls: ['./geo-coordinate-form.component.css'],
})

@Injectable()
export class GeoCoordinateFormComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  @Input() id: string;
  @Input() direction: string;
  @Input() geolocation: GeoCoordinata;
  @Input() utmVisible: Boolean;
  @Input() gmsVisible: Boolean;
  @Output() geolocationOut: EventEmitter<GeoCoordinata> = new EventEmitter<GeoCoordinata>();

  private tmpgeolocation: string | number;

  public Gradi: number;
  public Primi: number;
  public Secondi: number;
  public UTM: number;
  public GMS: string;
  geolocationValid: Boolean;
  tmpUtm: String[];
  tmpGMS: number | string;

  private coordinatesService: CoordinatesService;

  constructor(_coordinatesService: CoordinatesService) {
    this.coordinatesService = _coordinatesService;
  }

  ngOnInit() {
    this.setData();
  }

  updateData(event: any) {
    this.geolocationOut.emit(
      {
        Gradi: this.geolocation.Gradi,
        Primi: this.geolocation.Primi,
        Secondi: this.geolocation.Secondi,
        UTM: +this.geolocation.UTM,
        GMS: this.geolocation.GMS,
      }
    );

  }

  setData() {
    this.Gradi = this.geolocation.Gradi;
    this.Primi = this.geolocation.Primi;
    this.Secondi = this.geolocation.Secondi;
    this.GMS = this.geolocation.GMS;
    this.UTM = +this.geolocation.UTM;
  }

  DirectionSet() {
    return (this.direction.toLowerCase() == "latitudine") ? Direction.Latitude : Direction.Longitude;
  }

  AggiornaCoordinateDaUTMOnChange(event: any): void {
    console.log("AggiornaCoordinateDaUTMOnChange");
    this.tmpgeolocation = this.coordinatesService.transform(this.UTM, TransformationType.ToDegrees, this.DirectionSet()) // => `10°0'0" N`
    this.geolocationValid = this.coordinatesService.isValidDigit(this.UTM, this.DirectionSet()) // false, latitude allows only [-90, 90] values.
    console.log(this.geolocationValid ? "Valido" : "non valido");
    console.log(this.UTM);
    console.log(this.tmpgeolocation);

    if (this.geolocationValid) {
      this.tmpUtm = this.tmpgeolocation.toString().replace("°", " ").replace("'", " ").replace(String.fromCharCode(34), " ").split(" ");
      this.Gradi = +this.tmpUtm[0];
      this.Primi = +this.tmpUtm[1];
      this.Secondi = +this.tmpUtm[2];
      this.GMS = this.tmpgeolocation.toString();

      this.geolocation = {
        Gradi: this.Gradi,
        Primi: this.Primi,
        Secondi: this.Secondi,
        GMS: this.tmpgeolocation.toString(),
        UTM: +this.coordinatesService.transform(this.GMS, TransformationType.ToDigit, this.DirectionSet()),
      };
    }
    else
    {
      this.UTM=null;
    };
  }

  AggiornaCoordinateDaGMSOnChange(event: any): void {
    console.log("AggiornaCoordinateDaGMSOnChange");

    var tmp = "";
    switch (this.direction.toLowerCase()) {
      case "latitudine":
        tmp = (this.Gradi > 0) ? "N" : "S";
        break;
      case "longitudine":
        tmp = (this.Gradi > 0) ? "E" : "O";
        break;
    }
    this.tmpGMS = this.Gradi + "°" + this.Primi + "'" + this.Secondi + String.fromCharCode(34) + " " + tmp;
    this.tmpgeolocation = this.coordinatesService.transform(this.tmpGMS, TransformationType.ToDigit, this.DirectionSet())
    this.geolocationValid = this.coordinatesService.isValidDegree(this.tmpGMS, this.DirectionSet());

    if (this.geolocationValid) {
      this.UTM = +this.tmpgeolocation;
    }
    else
    {
      this.UTM = null;
    };
    this.geolocation = {
      Gradi: this.Gradi,
      Primi: this.Primi,
      Secondi: this.Secondi,
      UTM: this.UTM,
      GMS: this.tmpGMS,
    }
    this.updateData(this.geolocation);
  }

}
