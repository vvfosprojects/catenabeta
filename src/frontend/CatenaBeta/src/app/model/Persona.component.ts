import { IPersona } from "src/app/shared/interfaces";

export class Persona {
    readonly  Codice:string;
    readonly  UserName:string;
    readonly  NomeQualifica:string;
    readonly  Nome:string;
    readonly  Cognome:string;
    readonly  CodiceFiscale:string;
    readonly  CodiceTurno:string;
    readonly  CodiceUO:string;
    readonly  CodiceDominio:string;
    readonly  DescrizioneUO:string;

    static create(event: IPersona) {
        return { 
            Codice: event.Codice,
            UserName: event.UserName,
            NomeQualifica: event.NomeQualifica,
            Nome: event.Nome,
            Cognome: event.Cognome,
            CodiceFiscale:  event.CodiceFiscale,
            CodiceTurno:  event.CodiceTurno,
            CodiceUO:  event.CodiceUO,
            CodiceDominio:  event.CodiceDominio,
            DescrizioneUO:  event.DescrizioneUO,
        };
    }
}
