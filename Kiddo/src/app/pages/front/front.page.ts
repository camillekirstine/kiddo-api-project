import { Component, OnInit } from '@angular/core';
import { ActivityCard } from 'src/app/types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';

@Component({
  selector: 'app-front',
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage implements OnInit {
  originalActivities: ActivityCard[] = [];

  
  constructor(private activitiesService: ActivitiesService) { 
   
  }

  ngOnInit() {
  }


}
