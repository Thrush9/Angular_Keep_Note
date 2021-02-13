import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-note-view',
  templateUrl: './note-view.component.html',
  styleUrls: ['./note-view.component.css']
})
export class NoteViewComponent {

  notes: Array<Note>;

  constructor(private notesService: NotesService) {
    this.notes = [] ;
  }

  ngOnInit() {
    this.getAllNotes();
  }

  getAllNotes() {
    this.notesService.getNotes().subscribe(
      (resp) => this.notes = resp
    );
  }
}
