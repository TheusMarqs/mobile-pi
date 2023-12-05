import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Schedule } from './Schedule';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  url = "http://localhost:8080/Schedules";
  constructor(private http: HttpClient) { }

  getSchedules(): Observable<Schedule[]> {
    return this.http.get<Schedule[]>(this.url);
  }

  getSchedule(id: number): Observable<Schedule> {
    return this.http.get<Schedule>(`${this.url}/${id}`);
  }

  save(Schedule: Schedule): Observable<Schedule> {
    return this.http.post<Schedule>(this.url, Schedule);
  }

  update(Schedule: Schedule): Observable<Schedule> {
    return this.http.put<Schedule>(`${this.url}/${Schedule.id}`, Schedule);
  }

  delete(Schedule: Schedule): Observable<void> {
    return this.http.delete<void>(`${this.url}/${Schedule.id}`);
  }

}
