import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable()
export class RouterService {

  constructor(private routerObj: Router, private location: Location) {}

  routeToDashboard() {
    this.routerObj.navigate(['dashboard']);
  }

  routeToLogin() {
    this.routerObj.navigate(['login']);
  }

  routeToEditNoteView(noteId) {
    this.routerObj.navigate(['dashboard', {outlets: {noteEditOutlet: ['note', noteId, 'edit']}}]);
  }

  routeBack() {
    this.location.back();
  }

  routeToNoteView() {
    this.routerObj.navigate(['dashboard/view/noteview']);
  }

  routeToListView() {
    this.routerObj.navigate(['dashboard/view/listview']);
  }
}
