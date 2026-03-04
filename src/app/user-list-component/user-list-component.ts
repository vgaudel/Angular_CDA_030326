import { Component } from '@angular/core';
import { UserList, userListManager } from '../common/data/userList';
import { ActivatedRoute } from '@angular/router';
import { User } from '../common/data/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-list-component',
  imports: [CommonModule],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css',
})
export class UserListComponent {

  private ulm : UserList = userListManager;
  public users : User[] = [];

  constructor(route: ActivatedRoute){

      const id: string = route.snapshot.params['id'];
       
      let usr = this.ulm.getUserById(id);
      if (usr){this.users.push(usr);}
      

  }
}
