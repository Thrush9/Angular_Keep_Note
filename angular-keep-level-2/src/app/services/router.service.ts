import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class RouterService {

  constructor(private routerObj: Router) { }

  routeToDashboard() {
   this.routerObj.navigate(['dashboard']);
  }

  routeToLogin() {
   this.routerObj.navigate(['login']);
  }
}
