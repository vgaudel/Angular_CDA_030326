import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-calculatrice',
  imports: [FormsModule ],
  templateUrl: './calculatrice.html',
  styleUrl: './calculatrice.css',
})
export class Calculatrice {

  a : number = 0;
  b : number = 0;
  res : number = 0;

  onCalculer(op : string){
    switch(op){
      case '+' :
        this.res = this.a + this.b; break;
      case '-' :
        this.res = this.a - this.b; break;       
      case '*' :
        this.res = this.a * this.b; break;
      default :
        this.res = 0;
    }
  }

}
