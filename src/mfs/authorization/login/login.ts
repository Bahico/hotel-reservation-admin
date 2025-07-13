import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LoginService, TokenService} from '@components/account';

@Component({
  imports: [CommonModule, FormsModule],
  selector: 'login',
  templateUrl: 'login.html',
  styleUrl: 'login.scss',
})
export default class Login implements OnInit {
  private readonly userService = inject(LoginService);
  private readonly tokenService = inject(TokenService);
  username = '';
  password = '';

  ngOnInit() {
    this.tokenService.tokenData = null;
  }

  login() {
    this.userService.login(this.username, this.password);
  }
}
