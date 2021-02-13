import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './login/login.component';
import { ListViewComponent } from './list-view/list-view.component';
import { NoteViewComponent } from './note-view/note-view.component';
import { NoteTakerComponent } from './note-taker/note-taker.component';
import { EditNoteOpenerComponent } from './edit-note-opener/edit-note-opener.component';
import { EditNoteViewComponent } from './edit-note-view/edit-note-view.component';
import { NoteComponent } from './note/note.component';

import { AuthenticationService } from './services/authentication.service';
import { NotesService } from './services/notes.service';
import { RouterService } from './services/router.service';
import { CanActivateRouteGuard } from './can-activate-route.guard';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes, Router } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';


const myRoutes: Routes = [{
  path : 'login',
  component : LoginComponent
},
{
  path : 'dashboard',
  component : DashboardComponent,
  canActivate: [CanActivateRouteGuard],
  children : [
    {
      path : 'view/noteview',
      component : NoteViewComponent
    },
    {
      path : 'view/listview',
      component : ListViewComponent
    },
    {
    path : 'note/:noteId/edit',
    component : EditNoteOpenerComponent,
    outlet : 'noteEditOutlet'
    },
    {
      path : '',
      redirectTo : 'view/noteview',
      pathMatch : 'full'
    }
  ]
},
{
  path : '',
  redirectTo : 'dashboard',
  pathMatch : 'full'
}];


@NgModule({
  declarations: [AppComponent,
    DashboardComponent,
    HeaderComponent,
    LoginComponent,
    ListViewComponent,
    NoteViewComponent,
    NoteTakerComponent,
    EditNoteOpenerComponent,
    EditNoteViewComponent,
    NoteComponent],
  imports: [BrowserModule,
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
    MatDialogModule,
    MatSelectModule,
    RouterModule,
    RouterModule.forRoot(myRoutes)],
  providers: [NotesService, RouterService, AuthenticationService, CanActivateRouteGuard],
  bootstrap: [AppComponent],
  entryComponents: [EditNoteViewComponent]
})

export class AppModule { }
