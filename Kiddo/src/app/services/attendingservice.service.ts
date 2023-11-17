import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityCard } from '../types/ActivityCard';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AttendingService {
  private apiUrl = 'http://localhost:8080/attending/get/useratt'
  private activities: ActivityCard[] = [];

  constructor(private http: HttpClient) {}

  fetchAttending(): void {
    this.http
      .get<ActivityCard[]>('http://localhost:8000/attending/get/useratt')
      .subscribe(
        (response) => {
          this.activities = response; // Store the fetched activities in the service
        },
        (error) => {
          console.error(error);
        }
      );
  }

  getAttending(): Observable<ActivityCard[]> {
    return this.http.get<ActivityCard[]>(this.apiUrl);
  }


  public formatDate(date: Date){
    return date.toISOString().split('T')[0];
  }
}