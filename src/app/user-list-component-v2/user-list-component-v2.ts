import { Component } from '@angular/core';
import { User } from '../common/data/user';
import { UsersRestService } from '../common/service/users-rest-service';
import { CommonModule } from '@angular/common';
import { ChangeDetectorRef } from '@angular/core';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-user-list-component-v2',
  imports: [CommonModule],
  templateUrl: './user-list-component-v2.html',
  styleUrl: './user-list-component-v2.css',
})
export class UserListComponentV2 implements OnInit {

  public users : User[] = [];

  constructor(private userRestService : UsersRestService, private cdr : ChangeDetectorRef){}


  ngOnInit(): void {
    this.userRestService.getAllUsers().subscribe({
      next: (response) => {
        this.users = response.users;
      },
      error: () => {
        this.users =[];
      },
      complete: () => {
        this.cdr.detectChanges();
      }
    })
  }
}
