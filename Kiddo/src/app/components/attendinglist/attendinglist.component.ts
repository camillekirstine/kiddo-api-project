import { Component, Input, OnInit } from '@angular/core';
import { ActivityCard } from '../../types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';


import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-attendinglist',
  templateUrl: './attendinglist.component.html',
  styleUrls: ['./attendinglist.component.scss'],
})

export class AttendinglistComponent  implements OnInit {
  @Input() activity: ActivityCard = {
    id: 0,
    userId: 0,
    title: "Title",
    subtitle: "Subtitle",
    description: "Description",
    agegroup: "0-3 år",
    time: "00.00",
    date: new Date(2023-15-11),
    particapants: 0,
    location: "location",
    category: "Gaming",
    region: "Hovedstaden",
    createdAt: "createdAt",
    updatedAt: "updatedAt",
    image: "string"
  };

  @Input() showImage: boolean = true;

  constructor(
    private activitiesService: ActivitiesService,
    private http: HttpClient,

    private activityService: ActivityService,
    private route: ActivatedRoute,
    private router: Router
    ) { }

    attendingActivities: ActivityCard[] = [];

  ngOnInit() {
    this.activitiesService.fetchActivities();
  }

  makeHttpRequest(activityId: number): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
  
    this.http.delete(`http://localhost:8080/activities/delete/${activityId}`, { headers }).subscribe(
      () => {
        console.log('Deleted successfully');
        // Update the originalActivities array to remove the deleted activity
        this.attendingActivities = this.attendingActivities.filter(activity => activity.id !== activityId);
      },
      (error) => {
        console.error(error);
        // Handle the error here
      }
    );
  } 
}