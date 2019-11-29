import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { articles } from '../articles';

@Component({
  selector: 'app-afficher-catalogue',
  templateUrl: './afficher-catalogue.component.html',
  styleUrls: ['./afficher-catalogue.component.css']
})
export class AfficherCatalogueComponent implements OnInit {
huiles=[];
a= new articles ("az7775s5","Nouveau produit",40,"");

  constructor(private ser:DataService) {
    this.huiles=this.ser.Produits;
   }

  ngOnInit() {
  }

ajout(){
this.ser.ajouter(this.a);

}


}
