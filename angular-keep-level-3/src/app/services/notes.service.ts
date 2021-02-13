import { Injectable } from '@angular/core';
import { Note } from '../note';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';
import 'rxjs/add/operator/do';

@Injectable()
export class NotesService {

  notes: Array<Note>;
  notesSubject: BehaviorSubject<Array<Note>>;
  url = 'http://localhost:3000/api/v1/notes';

  constructor(private httpclient: HttpClient, private authService: AuthenticationService) {
    this.notes = [];
    this.notesSubject = new BehaviorSubject([]);
  }

  fetchNotesFromServer() {
    const token = this.authService.getBearerToken();
    return  this.httpclient.get<Array<Note>>(this.url,
      {
       headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
      }).subscribe(
        (resp) => {
          this.notes = resp;
          this.notesSubject.next(this.notes);
        },
        (err) => this.notesSubject.error(err)
      );
  }

  getNotes(): BehaviorSubject<Array<Note>> {
    return this.notesSubject;
  }

  addNote(note: Note): Observable<Note> {
    const token = this.authService.getBearerToken();
    return this.httpclient.post<Note>(this.url, note,
      {
        headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
      }).do(
        (addedNote) => {
          this.notes.push(addedNote);
          this.notesSubject.next(this.notes);
        }
      );
  }

  editNote(note: Note): Observable<Note> {
    const token = this.authService.getBearerToken();
    return this.httpclient.put<Note>(`http://localhost:3000/api/v1/notes/${note.id}`, note,
      {
        headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
      }).do(
        (updatedNote) => {
          const pastnote = this.notes.filter((existnote) => existnote.id === updatedNote.id);
          Object.assign(pastnote, updatedNote);
          this.notesSubject.next(this.notes);
        }
      );
  }

  getNoteById(noteId): Note {
   const search = this.notes.find((note) => note.id === Number(noteId));
   return search;
  }
}
