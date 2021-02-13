import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from './note';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NotesService {

  noteurl: string;

  constructor(private httpclient: HttpClient) {
   this.noteurl = 'http://localhost:3000/notes';
  }

  getNotes(): Observable<Array<Note>> {
    return this.httpclient.get<Array<Note>>(this.noteurl);
  }

  addNote(note: Note): Observable<Note> {
    return this.httpclient.post<Note>(this.noteurl, note);
  }

}
