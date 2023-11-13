import { Component, Input, OnInit } from '@angular/core';
import { ActivityCard } from '../../types/ActivityCard';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() activity: ActivityCard = {
    id: 0,
    name: 'Oliver',
    email: 'Oliver@mail.dk',
    phone: '8888888',
    imageSrc: 'assets/soccerkid 1.png',
    title: 'Fodbold',
    subTitle: 'Junior fodbold for drenge',
    description: 'Fodbold beskrivelse',
    ageGroup: "0-3 år",
    time: '00.00',
    date: new Date('2023-11-10'),
    participants: 20,
    location: 'Den der by',
    category: 'Sport',
    region: 'Hovedstaden'
  };

  @Input() showImage: boolean = true;

  constructor() {}

  ngOnInit() {}
}
