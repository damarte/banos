import { Component } from '@angular/core';
import { AuthenticationService } from 'app/services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  loggedIn = false;

  constructor(public auth: AuthenticationService, public router: Router) {
    this.auth.loggedIn$.subscribe(user => {
      console.log('Evento de login');
      this.loggedIn = true;
    });

    this.auth.loggedOut$.subscribe(value => {
      console.log('Evento de logout');
      this.loggedIn = false;
    });
  }

  onLogout(event) {
    event.preventDefault();

    this.auth.logout().subscribe(
      value => {
        this.router.navigate(['login']);
      },
      error => console.log(error)
    );
  }
}
