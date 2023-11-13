import { AgeGroup, Category, Region } from "./Filtering";

export interface ActivityCard {
    id: number;
    imageSrc: string;
    name: string;
    email: string;
    phone: string;
    title: string;
    subTitle: string;
    description: string;
    ageGroup: AgeGroup;
    time: string;
    date: Date;
    participants: number;
    location: string;
    category: Category;
    region: Region;
}