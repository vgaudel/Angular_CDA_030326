import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { IProduit } from '../../common/iproduit';

@Component({
  selector: 'app-produits',
  imports: [FormsModule, CommonModule],
  templateUrl: './produits.html',
  styleUrl: './produits.css',
})
export class Produits {

  listeCategories = ["bd","jeu vidéo","autres"];
  mapCategorieProduits = new Map<string, IProduit[]>();
  categorie : string = "";
  listeProduits : IProduit[] = [];

  onSelectCategorie(categorieChoisie:string){
    this.categorie= categorieChoisie;
    console.log("categorieChoisie=" + this.categorie);
    // Ici on remet une valeur par défaut sir le get nous retourne un udefined
    this.listeProduits = this.mapCategorieProduits.get(this.categorie) ?? []; 
    console.log("listeProduits=" + JSON.stringify(this.listeProduits));
  }

  constructor() {
    this.mapCategorieProduits.set(
      "bd", [
      { ref: "bd1", label: "Carbonne et Silicium", prix: 39 },
      { ref: "bd2", label: "Le marsupilami contre attaque 2", prix: 22 },
      { ref: "bd3", label: "One Piece 114", prix: 9 },
    ]
    );

    this.mapCategorieProduits.set(
      "jeu vidéo", [
      { ref: "jv1", label: "Mario 64", prix: 0 },
      { ref: "jv2", label: "Minecraft", prix: 39 },
      { ref: "jv3", label: "Sea of Thieves", prix: 70 },
    ]
    );

    this.mapCategorieProduits.set("autres", [
      { ref: 'p5', label: 'smartPhone', prix: 255.6 },
      { ref: 'p6', label: 'TV', prix: 567.6 },
    ]
    );
  }

}
