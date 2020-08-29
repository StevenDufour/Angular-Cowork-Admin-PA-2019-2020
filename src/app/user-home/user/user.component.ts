import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../services/user/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  users: any = [];
  displayedColumns: string[] = ['firstname', 'lastname', 'email', 'login', 'type' , 'subscription', 'update' , 'delete'];

  constructor(private userService: UserService) {
    this.users = this.getAllUsers();
  }

  ngOnInit(): void {
  }

  getAllUsers(): any {
    this.userService.getAllUsers()
      .subscribe(value => this.users = value);
  }


  deleteUser(id): any {
    console.log(id);
    this.userService.deleteUser(id).subscribe(complete => this.getAllUsers());
    window.location.reload();
  }

}
