import { Component, OnInit } from '@angular/core';
import { 
        IColonnina,ILettura,IColonninaLetture} from '../../shared/interfaces';
import { CatenabetaApiService } from  '../../core/catenabeta-api.service';


@Component({
  selector: 'app-colonnina',
  templateUrl: './colonnina.component.html',
  styleUrls: ['./colonnina.component.css']
})

export class ColonninaComponent implements OnInit,IColonnina {
  _id:                        String;
  id:                         String;
  idSede:                     String;
  regione:                    String;
  provincia:                  String;
  modelloStrumCampionamento:  String;
  matricolaStrumCampionamento:String;
  rilevamenti:                    Array<ILettura>

  isVisible = true;
  public Xr33All: Array<IColonnina> = null;
 
  constructor(private catenabetaApiService: CatenabetaApiService) {
    this.rilevamenti= new Array<ILettura>();
   }

  ngOnInit() {
    this.getAllEntries();
  }
  public  getAllEntries() {
    var tmp=this.catenabetaApiService.getAllXr33()
    .subscribe((data: IColonnina[])  => {
      this.Xr33All = data;
    });
}
  switcher () {
    this.isVisible=!this.isVisible;
  }

}
