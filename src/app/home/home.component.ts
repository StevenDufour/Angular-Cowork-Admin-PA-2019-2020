import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthService) {
    const user = this.authService.getUser();
    console.log(user);
  }

  ngOnInit(): void {
  }

}
