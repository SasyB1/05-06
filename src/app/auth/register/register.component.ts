import { Component } from '@angular/core';
import { iUser } from '../../interfaces/user';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent {
  newUser: Partial<iUser> = {};

  constructor(private authSvc: AuthService) {}

  register() {
    this.authSvc.register(this.newUser).subscribe((res) => {
      console.log(res);
    });
  }
}
