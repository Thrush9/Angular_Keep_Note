import { Component, Inject, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RouterService } from '../services/router.service';

@Component({
  selector: 'app-edit-note-view',
  templateUrl: './edit-note-view.component.html',
  styleUrls: ['./edit-note-view.component.css']
})
export class EditNoteViewComponent {
  note: Note;
  states: Array<string> = ['not-started', 'started', 'completed'];
  errMessage: string;

  constructor(public matdialogref: MatDialogRef<EditNoteViewComponent>, @Inject(MAT_DIALOG_DATA) public data: any,
     private notesService: NotesService, public routerService: RouterService) {
    }

  ngOnInit() {
    this.note = this.notesService.getNoteById(this.data);
  }

  onSave() {
     this.notesService.editNote(this.note).subscribe(
       (resp) => { console.log(resp); },
       (err) => { this.errMessage = err.message; }
     );
     this.matdialogref.close();
     this.routerService.routeBack();
  }
}
