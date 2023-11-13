export type Category = 
    | 'Kreativt'
    | 'Gaming'
    | 'Legeaftale'
    | 'Udendørs'
    | 'Sport';

export type AgeGroup =
    | '0-3 år'
    | '4-6 år'
    | '7-10 år'
    | '11-13 år';

export type Region = 
    | "Hovedstaden"
    | "Midtsjælland"
    | "Vestsjælland"
    | "Lolland/Falster"
    | "Nordjylland"
    | "Østjylland"
    | "Vestjylland"
    | "Sønderjylland";


export type ActivityFilterType = Category | AgeGroup | Region;

export type FilterKeys = 'categories' | 'ageGroups' | 'regions';


export type Filters = {
    [K in FilterKeys]: Partial<Record<Category | AgeGroup | Region, boolean>>;
}

export interface FilterGroup {
    label: string;
    keys: ActivityFilterType[];
    filterType: keyof Filters;
    collapsed?: boolean;
  }
  
