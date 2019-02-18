import { IPersona } from "src/app/shared/interfaces";

export class Persona {
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
