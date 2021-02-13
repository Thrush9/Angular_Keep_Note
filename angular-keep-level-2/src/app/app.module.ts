import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NotesService } from './services/notes.service';
import { RouterService } from './services/router.service';
import { AuthenticationService } from './services/authentication.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterModule, Routes, Router } from '@angular/router';

const myRoutes: Routes = [{
  path : 'login',
  component : LoginComponent
},
{
  path : 'dashboard',
  component : DashboardComponent,
  canActivate: [CanActivateRouteGuard]
},
{
  path : '',
  redirectTo : 'dashboard',
  pathMatch : 'full'
}];

@NgModule({
  declarations: [AppComponent, LoginComponent, HeaderComponent, DashboardComponent],
  imports: [ BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatToolbarModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    RouterModule,
    RouterModule.forRoot(myRoutes) ],
  providers: [NotesService, RouterService, AuthenticationService, CanActivateRouteGuard],
  bootstrap: [AppComponent]
})

export class AppModule { }
