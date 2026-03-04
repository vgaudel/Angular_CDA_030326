import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';





@Component({
  selector: 'app-tva',
  imports: [FormsModule,CommonModule],
  templateUrl: './tva.html', 
  styleUrl: './tva.css',
})




export class Tva {

  calcul = {
    ht: 0,
    taux: 5,
    tva: 0,
    ttc: 0
  };

  listeTaux = [
    {type : "basse", valeur : 5},
    {type : "moyenne", valeur : 10}, 
    {type : "haute", valeur : 20}];

  onCalculerTvaEtTtc(){
    this.calcul.tva = this.calcul.ht*this.calcul.taux/100;
    this.calcul.ttc = this.calcul.ht + this.calcul.tva;
  }
}
