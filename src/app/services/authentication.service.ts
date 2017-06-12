import { Injectable, EventEmitter } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthenticationService implements CanActivate {

  public loggedIn$: EventEmitter<firebase.User>;
  public loggedOut$: EventEmitter<{}>;

  constructor(public af: AngularFireAuth) {
    this.loggedIn$ = new EventEmitter();
    this.loggedOut$ = new EventEmitter();

    this.af.authState.subscribe(user => {
      if (user) {
        // user logged in
        this.loggedIn$.emit(user);
      } else {
        // user not logged in
        this.loggedOut$.emit();
      }
    });
  }

  login(username: string, password: string): Observable<firebase.User> {
    return new Observable(observer => {
      this.af.auth.signInWithEmailAndPassword(username, password)
      .catch(function(error) {
        observer.error(error);
      })
      .then(function(user){
        observer.next(user);
        observer.complete();
      });
    });
  }

  logout() {
    return new Observable(observer => {
      this.af.auth.signOut()
      .catch(function(error) {
        observer.error(error);
      })
      .then(function(){
        observer.next({});
        observer.complete();
      });
    });
  }

  loggedIn(): boolean {
    return this.af.auth.currentUser != null;
  }

  canActivate() {
    return this.loggedIn();
  }
}
