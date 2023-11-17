import { Component, Input, OnInit } from '@angular/core';
import { ActivityCard } from '../../types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';


import { ActivatedRoute, Router } from '@angular/router';
import { ActivityService } from 'src/app/services/activity.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})

export class ListComponent  implements OnInit {
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

  ngOnInit() {
    this.activitiesService.fetchActivities();
  }

  makeHttpRequest(): void {
    const headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
    const now = new Date();

    this.http.delete('http://localhost:8080/activities/delete/:id').subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.error(error);
      }
    );
  }

  onDelete(): void {
    this.makeHttpRequest();  
  }

}
