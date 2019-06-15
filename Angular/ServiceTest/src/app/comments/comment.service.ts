import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs';
import {Comment} from './comment.modelo';
import { map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(private http:Http) { }

  getComments(): Observable<Comment[]>{
    return this.http.get('https://jsonplaceholder.typicode.com/comments')
    .pipe(map(res => res.json()));
  }

}
