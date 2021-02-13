import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { EditNoteViewComponent } from '../edit-note-view/edit-note-view.component';

@Component({
  selector: 'app-edit-note-opener',
  templateUrl: './edit-note-opener.component.html',
  styleUrls: ['./edit-note-opener.component.css']
})
export class EditNoteOpenerComponent {

  constructor(private matDialog: MatDialog, private activatedRoute: ActivatedRoute) {
    const noteid = this.activatedRoute.snapshot.paramMap.get('noteId');
    const dialog = this.matDialog.open(EditNoteViewComponent, {data: noteid});
   }

}
