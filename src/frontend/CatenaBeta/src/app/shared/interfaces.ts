export interface IColonninaLetture {
    xr33_Id:            String;
    xr33Id:             String;
    letture:            ILettura[]
}

export interface IColonnina {
    _id:                String;
    id:                 String;
    idSede:             String;
    dataInserimento:    Date;
    usernameOperatore:  String;
    regione:            String;
    provincia:          String;
    effSistema:         String;
    causaInefficienza:  String;
    tipologia:          Number;
    luogo:              String;
    sistema:            String;
    utmFuso:            Number;
    utmEst:             Number;
    utmNord:            Number;
    greenEGradi:        Number;
    greenEPrimi:        Number;
    greenESecondi:      Number;
    greenNGradi:        Number;
    greenNPrimi:        Number;
    greenNSecondi:      Number;
    letture:            ILettura[]
}


export interface ILettura {
    _id:                Number;
    id:                 Number;
    dataMisura:         Date;        
    matAspiratore:      String;
    matConteggio:       String;
    volumeAspirato:     Number;
    condizioneMeteo:    String;
    misuraBianco1:      Number;
    misuraBianco2:      Number;
    misuraNero:         Number;
    note:               String;
}

export interface IRegione{

    codRegione:         Number;
    codArea:            Number;
    regione:            String;
    areaTerritoriale:   String;
}

export interface IProvincia{
    codProvincia:       String;
    provincia:          String;
    codRegione:         Number;
    regione:            String;

}

export interface IComune{
    codISTAT:	        Number;
    codProvincia:	    String;
    comune:	            String;
    cap:	            String;
    codNazionale:	    String;
    codCatastale:	    String;
    flagVariazione:     Boolean;

}

export interface IComando{
    codCMD:             String;
    comando:            String;
}

export interface IStatoEfficienza{
    id:                 String;
    descrizione:        String;
}