import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivityCard } from '../types/ActivityCard';
import { Observable } from 'rxjs';
import { UserInfo } from '../types/UserInfo';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private apiUrl = 'http://localhost:8080/users/get'
  private userInfo: UserInfo [] = [];

  constructor(private http: HttpClient) {}

  fetchActivities(): void {
    this.http
      .get<UserInfo[]>('http://localhost:8000/users/get')
      .subscribe(
        (response) => {
          this.userInfo = response; // Store the fetched activities in the service
        },
        (error) => {
          console.error(error);
        }
      );
  }

  getUser(): Observable<UserInfo[]> {
    return this.http.get<UserInfo[]>(this.apiUrl);
  }
  

  
}

 
