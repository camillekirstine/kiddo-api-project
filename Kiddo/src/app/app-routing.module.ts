import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'front',
    pathMatch: 'full'
  },
  {
    path: 'calender',
    loadChildren: () => import('./calender/calender.module').then( m => m.CalenderPageModule)
  },
  {
    path: 'all-activities',
    loadChildren: () => import('./pages/all-activities/all-activities.module').then( m => m.AllActivitiesPageModule)
  },
  {
    path: 'add-activity',
    loadChildren: () => import('./pages/add-activity/add-activity.module').then( m => m.AddActivityPageModule)
  },
  {
    path: 'front',
    loadChildren: () => import('./pages/front/front.module').then( m => m.FrontPageModule)
  },
  {
    path: 'details/:id',
    loadChildren: () => import('./pages/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  },
  {
    path: 'attend',
    loadChildren: () => import('./pages/attend/attend.module').then( m => m.AttendPageModule)
  },
  {
    path: 'search-results',
    loadChildren: () => import('./pages/search-results/search-results.module').then( m => m.SearchResultsPageModule)
  },
  {
    path: 'contact',
    loadChildren: () => import('./pages/contact/contact.module').then( m => m.ContactPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./pages/user/user.module').then( m => m.UserPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
