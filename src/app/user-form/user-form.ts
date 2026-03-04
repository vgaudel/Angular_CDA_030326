import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { User } from '../common/data/user';
import { userListManager } from '../common/data/userList';

@Component({
  selector: 'app-user-form',
  imports: [FormsModule, CommonModule],
  templateUrl: './user-form.html',
  styleUrl: './user-form.css',
})
export class UserForm {

    public user : User = new User();
    public message : string = ""; 
    private ulm = userListManager;

    public onSave(){
      this.ulm.addUser(this.user) ;
      this.message = "user =" + JSON.stringify(this.user);
      console.log(JSON.stringify(this.ulm.getAllUsers()))
    }

    public onFetchFromUsername(){
      //TODO
    }

}
