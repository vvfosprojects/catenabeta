import { Persona } from "../model/Persona.component";
import { coordinate } from 'geocoordinate';
import { Point, GeoJsonObject}  from 'geojson';


export interface IColonninaLetture {
    xr33_Id: String;
    xr33Id: String;
    letture: ILettura[]
}

export interface IColonnina {
    _id: String;
    id: String;
    idSede: String;
    regione: String;
    provincia: String;
    modelloStrumCampionamento: String;
    matricolaStrumCampionamento: String;

    rilevamenti: Array<ILettura>
}


export interface ILettura {
    _id: Number;
    id: Number;
    utente: String;
    cognomeOperatore: String;
    nomeOperatore: String;

    dataCampionamento: Date;
    dataInserimento: Date;
    modelloStrumMisura: String;
    matricolaStrumMisura: String;

    progressivoMisura: Number;
    monitoraggioSettimanale: Boolean;
    monitoraggioIntervento: Boolean;

    CatenaMisuraEfficiente: Boolean;
    CatenaMisuraCausaInefficienza: String;
    volumeAriaAspirato: number;
    condizioniMeteo: String;
    luogoMisurazione: String;
    geoCoordinate: Point;
    letturaFiltroBianco: Number;
    letturaFiltroBianco2ore: Number;
    letturaFiltroNero: Number;
    note: String;
}

export interface IXr33Modelli {
    _id: Number;
    modello: string;
}

export interface IRegione {

    codRegione: Number;
    codArea: Number;
    regione: String;
    areaTerritoriale: String;
}

export interface IProvincia {
    codProvincia: String;
    provincia: String;
    codRegione: Number;
    regione: String;

}

export interface IComune {
    codISTAT: Number;
    codProvincia: String;
    comune: String;
    cap: String;
    codNazionale: String;
    codCatastale: String;
    flagVariazione: Boolean;

}

export interface IComando {
    codCMD: String;
    comando: String;
}

export interface IStatoEfficienza {
    id: String;
    descrizione: String;
}

export interface IPersona {
    Codice: string;
    UserName: string;
    NomeQualifica: string;
    Nome: string;
    Cognome: string;
    CodiceFiscale: string;
    CodiceTurno: string;
    CodiceUO: string;
    CodiceDominio: string;
    DescrizioneUO: string;
}

export interface IGeoCoordinata {
    UTM: number;
    Gradi: number;
    Primi: number;
    Secondi: number;
    GMS: string;
}