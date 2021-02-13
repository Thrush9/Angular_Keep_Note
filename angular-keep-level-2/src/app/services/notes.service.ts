import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Note } from '../note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AuthenticationService } from './authentication.service';

@Injectable()
export class NotesService {

  url = 'http://localhost:3000/api/v1/notes';

  constructor(private httpclient: HttpClient, private authService: AuthenticationService) {

  }

  getNotes(): Observable<Array<Note>> {
    const token = this.authService.getBearerToken();
    return  this.httpclient.get<Array<Note>>(this.url,
      {
       headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
      });
  }

  addNote(note: Note): Observable<Note> {
    const token = this.authService.getBearerToken();
    return this.httpclient.post<Note>(this.url, note,
      {
        headers : new HttpHeaders().set('Authorization', `Bearer ${token}`)
      });
  }

}
