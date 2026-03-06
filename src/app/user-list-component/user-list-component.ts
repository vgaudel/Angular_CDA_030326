import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../common/data/user';
import { CommonModule } from '@angular/common';
import { UsersService } from '../common/service/users-service';

@Component({
  selector: 'app-user-list-component',
  imports: [CommonModule],
  templateUrl: './user-list-component.html',
  styleUrl: './user-list-component.css',
})
export class UserListComponent {


  public users: User[] = [];

  constructor(route: ActivatedRoute, private _ulm: UsersService) {

    const id: string = route.snapshot.params['id'];

    if (id === 'all') {
      this.users = this._ulm.getAllUsers();
    } else {
      let usr = this._ulm.getUserById(id);
      if (usr) { this.users.push(usr); }
    }

  }

}

