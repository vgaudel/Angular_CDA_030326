import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pipes',
  imports: [CommonModule],
  templateUrl: './pipes.html',
  styleUrl: './pipes.css',
})
export class Pipes {

  public today : Date = new Date();
  public text : string = "Bonjour les CDAs";
  public amount: number = 1234.56;
  public ratio: number = 0.35;
  public items: string[] = ['Angular', 'React', 'Vue', 'Svelte'];
  public user = {
    id: 1,
    name: 'Alice',
    role: 'admin',
  };
  
  public cssColors = {
    Red: '#FF0000',
    Green: '#008000',
    Blue: '#0000FF',
  };

}
