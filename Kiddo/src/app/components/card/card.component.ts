import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivityCard } from '../../types/ActivityCard';
import { ActivitiesService } from 'src/app/services/activitiesservice.service';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  providers: [ActivitiesService]
})
export class CardComponent implements OnInit {
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

  constructor(private activitiesService: ActivitiesService) {}

  ngOnInit() {
    this.activitiesService.fetchActivities();
  }
}

