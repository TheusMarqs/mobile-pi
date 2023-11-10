import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './Course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url = "http://localhost:8080/Courses";
  constructor(private http: HttpClient) { }

  getCourses(): Observable<Course[]> {
    return this.http.get<Course[]>(this.url);
  }

  getCourse(id: number): Observable<Course> {
    return this.http.get<Course>(`${this.url}/${id}`);
  }

  save(course: Course): Observable<Course> {
    return this.http.post<Course>(this.url, course);
  }

  update(course: Course): Observable<Course> {
    return this.http.put<Course>(`${this.url}/${course.id}`, course);
  }

  delete(course: Course): Observable<void> {
    return this.http.delete<void>(`${this.url}/${course.id}`);
  }

}
