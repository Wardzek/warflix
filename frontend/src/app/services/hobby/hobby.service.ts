import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Hobby } from '../../models/hobby.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HobbyService {

  private apiUrl = 'http://127.0.0.1:8000/api/hobbies';

  constructor(private http: HttpClient) { }

  getHobbies(): Observable<Hobby[]> {
    return this.http.get<Hobby[]>(this.apiUrl);
  }
}
