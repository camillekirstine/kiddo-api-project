import { Component, OnInit } from '@angular/core';
import { mockActivities } from 'src/app/constants/MockActivities';
import { ActivityCard } from 'src/app/types/ActivityCard';

@Component({
  selector: 'app-front',
  templateUrl: './front.page.html',
  styleUrls: ['./front.page.scss'],
})
export class FrontPage implements OnInit {
  originalActivities: ActivityCard[] = mockActivities;

  
  constructor() { 
   
  }

  ngOnInit() {
  }


}
