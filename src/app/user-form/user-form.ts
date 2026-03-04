import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../common/data/user';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

    public user : User = new User();
    public message : string = ""; 

    public onSave(){
      this.user.id = new Date().getTime().toString() ; 
      this.message = "user =" + JSON.stringify(this.user);
    }

    public onFetchFromUsername(){
      //TODO
    }

}
