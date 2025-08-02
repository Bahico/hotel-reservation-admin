import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {LoginService, TokenService} from '@components/account';
import {NzIconDirective} from 'ng-zorro-antd/icon';

@Component({
  imports: [CommonModule, FormsModule,  NzIconDirective],
  selector: 'login',
  templateUrl: 'login.html',
  styleUrl: 'login.scss',
})
export default class Login implements OnInit {
  private readonly userService = inject(LoginService);
  private readonly tokenService = inject(TokenService);
  isShowPassword = true
  username = '';
  password = '';

  ngOnInit() {
    this.tokenService.tokenData = null;
  }

  login() {
    this.userService.login(this.username, this.password);
  }
}
