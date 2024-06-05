import { Component } from '@angular/core';
import { iUser } from '../../interfaces/user';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'app-profilo',
  templateUrl: './profilo.component.html',
  styleUrl: './profilo.component.scss',
})
export class ProfiloComponent {
  user!: iUser;

  constructor(private authSvc: AuthService) {}

  ngOnInit() {
    this.authSvc.user$.subscribe((user) => {
      if (user) this.user = user;
    });
  }
}
