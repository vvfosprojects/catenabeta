import { IGeoCoordinata } from "src/app/shared/interfaces";
import { CoordinatesService, TransformationType, Direction } from 'angular-coordinates';


export class GeoCoordinata {

    public Gradi: number;
    public Primi: number;
    public Secondi: number;
    public UTM: number;
    public GMS: string;
    
    static create(event: IGeoCoordinata) {
        var tmp = new GeoCoordinata()
        {
            UTM: +event.UTM;
            GMS: event.GMS;
            Gradi: event.Gradi;
            Primi: event.Primi;
            Secondi: event.Secondi;
        };
        return tmp;
    }


}