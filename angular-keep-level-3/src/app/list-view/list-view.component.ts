import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.css']
})
export class ListViewComponent {

  notStartedNotes: Array<Note>;
  startedNotes: Array<Note>;
  completedNotes: Array<Note>;

  constructor(private notesService: NotesService) {
    this.notStartedNotes = [] ;
    this.startedNotes = [] ;
    this.completedNotes = [] ;
  }

  ngOnInit() {
    this.getStateWiseNotes();
  }

  getStateWiseNotes() {
    this.notesService.getNotes().subscribe(
      (resp) => {
      this.notStartedNotes = resp.filter((note) => note.state  === 'not-started');
      this.startedNotes = resp.filter((note) => note.state  === 'started');
      this.completedNotes = resp.filter((note) => note.state  === 'completed');
     }
    );
  }
}
