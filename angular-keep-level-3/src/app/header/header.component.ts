import { Component } from '@angular/core';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isNoteView = true;

  constructor(private routerService: RouterService) {

  }

  getListView() {
    this.isNoteView = false;
    this.routerService.routeToListView();
  }

  getNoteView() {
    this.isNoteView = true;
    this.routerService.routeToNoteView();
  }
}
