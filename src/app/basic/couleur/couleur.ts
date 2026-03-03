import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-couleur',
  imports: [CommonModule, FormsModule],
  templateUrl: './couleur.html',
  styleUrl: './couleur.css',
})
export class Couleur {

  listeCouleurs = ["blue","red","black"];
  couleur : string = "black";
  /* <select>  
      <option> blue</option>
      <option> red</option>
      <option> black</option>
    </select>*/
  message : string = "Quelques valeurs au carré";
  valeurs : number[] = [1,2,4,8,16];
  nouvelleValeur: number = 0;

  onAjoutNouvelleValeur(){
    this.valeurs.push(this.nouvelleValeur);
  }
}
