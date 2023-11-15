import { Time } from "@angular/common";
import { AgeGroup, Category, Region } from "./Filtering";

export interface ActivityCard {
    image: any;
    id: number,
    userId: number,
    title: string,
    subtitle: string,
    description: string,
    agegroup: AgeGroup,
    time: string,
    date: Date,
    particapants: number,
    location: string,
    category: Category,
    region: Region,
    createdAt: string,
    updatedAt: string,


}