import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { MaterialModule } from './modules/material.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { AuthenticationService } from 'app/services/authentication.service';
const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent, canActivate: [AuthenticationService] },
  { path: 'list/:entity', component: ListComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
 // { path: 'update-book/:id', component: UpdateBookComponent },
 // { path: '**', component: PageNotFoundComponent }
];

import { environment } from 'environments/environment';
import 'hammerjs';
import { ListComponent } from './list/list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MaterialModule,
  ],
  providers: [
    AuthenticationService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
