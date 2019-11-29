import { Injectable } from '@angular/core';
import { articles } from './articles';

@Injectable({
  providedIn: 'root'
})
export class DataService {
Produits=[

  new articles ("az7775s5","Mandarine",40,"../assets/mandarine.jpg"),
  new articles ("14df256qa","Lavande",40,"../assets/lavande.jpg"),
  new articles ("148rd54s2","Orange",40,"../assets/orange.jpg"),
  new articles ("yx64k854","Cedre",40,"../assets/cèdre.jpg"),
  new articles ("35ts84qaf","Citronnelle",40,"../assets/citronnelle.jpg"),
  new articles ("8ai33d5d","Ravintsara",40,"../assets/ravintsara.jpg"),
  new articles ("45ueyeyr5","Ylangylang",40,"../assets/ylangylang.jpg"),
  new articles ("31xd136qp","Bergamote",40,"../assets/bergamote.jpg"),
  new articles ("3xz0d555","Teatree",40,"../assets/teatree.jpg"),
  new articles ("26po334zwz7","eucalyptus",40,"../assets/eucalyptus.jpg")];

  constructor() { }

ajouter(a:articles){
  this.Produits.push(a);

}

}
