import { Component } from '@angular/core';
import { Calculatrice } from './calculatrice/calculatrice';
import { Couleur } from './couleur/couleur';
import { Produits } from './produits/produits';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-basic',
  imports: [Calculatrice, Couleur, Produits, FormsModule],
  templateUrl: './basic.html',
  styleUrl: './basic.css',
})
export class Basic {

  username : string = "";
  message : string = "Vous n'avez pas encore entré de nom d'utilisateur.";
  cpt : number = 0;
  couleurBouton : string = "Green"

  onAction(){
    this.cpt++;
    this.couleurBouton = this.username
    this.message = "Bonjour " + this.username + ". J'ai cliqué sur le bouton " + this.cpt + " fois."
  }

}
