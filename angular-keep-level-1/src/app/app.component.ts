import { Component, OnInit } from '@angular/core';
import { Note } from './note';
import { NotesService } from './notes.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  errMessage: string;
  noteObj: Note;
  noteArray: Array<Note>;

  constructor(private noteService: NotesService) {
    this.noteObj = new Note();
    this.noteArray = [];
  }

  ngOnInit() {
   this.getNotes();
  }

  addNote() {
    if (this.noteObj.text != null && this.noteObj.text !== '' &&
       this.noteObj.title != null && this.noteObj.title !== '') {
         this.noteArray.push(this.noteObj);
         this.noteService.addNote(this.noteObj).subscribe(
           (response) => {console.log(response); } ,
           (error) => {
              const pos: number = this.noteArray.findIndex(note => note.title === this.noteObj.title);
              this.noteArray.splice(pos, 1);
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
      (response) => { this.noteArray = response; },
      (error) => { this.errMessage = error.message; }
    );
  }

}
