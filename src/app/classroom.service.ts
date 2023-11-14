import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Classroom } from './Classroom';

@Injectable({
  providedIn: 'root'
})
export class ClassroomService {

  constructor(private http: HttpClient) { }

  getClassrooms(): Observable<Classroom[]> {
    return this.http.get<Classroom[]>(environment.baseUrl);
  }

  getClassroom(id: number): Observable<Classroom> {
    return this.http.get<Classroom>(`${environment.baseUrl}/${id}`);
  }

  save(classroom: Classroom): Observable<Classroom> {
    return this.http.post<Classroom>(environment.baseUrl, classroom);
  }

  update(classroom: Classroom): Observable<Classroom> {
    return this.http.put<Classroom>(`${environment.baseUrl}/${classroom.id}`, classroom);
  }

  delete(classroom: Classroom): Observable<void> {
    return this.http.delete<void>(`${environment.baseUrl}/${classroom.id}`);
  }

}
