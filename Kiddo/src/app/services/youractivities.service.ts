import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityCard } from '../types/ActivityCard';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class YourActivitiesService {
  private apiUrl = 'http://localhost:8080/activities/get/byuserId'
  private activities: ActivityCard[] = [];

  constructor(private http: HttpClient) {}

  fetchActivities(): void {
    this.http
      .get<ActivityCard[]>('http://localhost:8080/activities/get/byuserId')
      .subscribe(
        (response) => {
          this.activities = response; // Store the fetched activities in the service
        },
        (error) => {
          console.error(error);
        }
      );

    
  }

  getActivities(): Observable<ActivityCard[]> {
    return this.http.get<ActivityCard[]>(this.apiUrl);
    

  
  }

  getActivityById(id: number): Observable<ActivityCard> {
    const url = 'http://localhost:8080/activities/:id';
    return this.http.get<ActivityCard>(url);
  }


  public formatDate(date: Date){
    return date.toISOString().split('T')[0];
  }

}