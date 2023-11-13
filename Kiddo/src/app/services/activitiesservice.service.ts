import { Injectable } from '@angular/core';
import { mockActivities } from 'src/app/constants/MockActivities';
import { ActivityCard } from 'src/app/types/ActivityCard';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ActivitiesserviceService {
  Activity: ActivityCard[] = mockActivities;

  constructor() { }

  public getActivites(): any {
    const activitiesObs = new Observable(observer => {
      setTimeout(() => {
        observer.next(this.Activity);
      }, 1000);
    });

    return activitiesObs;
  }

  public fetchActivityOnDate(date: string){
    const activitiyOnDate = mockActivities.filter(activity => this.formatDate(activity.date) === date);
    return activitiyOnDate;
  }

  public formatDate(date: Date){
    return date.toISOString().split('T')[0];
  }
}