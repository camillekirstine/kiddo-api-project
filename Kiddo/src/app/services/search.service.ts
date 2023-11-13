import { Injectable } from '@angular/core';
import { mockActivities } from '../constants/MockActivities';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  search(query: string) {
    return mockActivities.filter(activity => 
      activity.title.toLowerCase().includes(query.toLowerCase())
    );
  }

  constructor() { }
}
