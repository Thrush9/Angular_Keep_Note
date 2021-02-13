import { Component, OnInit } from '@angular/core';
import { Note } from '../note';
import { NotesService } from '../services/notes.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  errMessage: string;
  noteObj: Note;
  notes: Array<Note>;

  constructor(private noteService: NotesService) {
    this.noteObj = new Note();
    this.notes = [];
  }

  ngOnInit() {
   this.getNotes();
  }

  addNote() {
    if (this.noteObj.text != null && this.noteObj.text !== '' &&
       this.noteObj.title != null && this.noteObj.title !== '') {
         this.notes.push(this.noteObj);
         this.noteService.addNote(this.noteObj).subscribe(
           (response) => {console.log(response); } ,
           (error) => {
              const pos: number = this.notes.findIndex(note => note.title === this.noteObj.title);
              this.notes.splice(pos, 1);
              this.errMessage = error.message;
           }
         );
      this.noteObj = new Note();
    } else {
      this.errMessage = 'Title and Text both are required fields';
    }
  }

  getNotes() {
    this.noteService.getNotes().subscribe(
      (response) => { this.notes = response; },
      (error) => { this.errMessage = error.message; }
    );
  }

}
