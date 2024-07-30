import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './shared/pages/home-Page/home-Page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPagesComponent } from './shared/pages/contact-Pages/contact-Pages.component';


const routes: Routes = [
  //{
    //path: 'home',
   // component: HomePageComponent
 // },
  {
    path: 'about',
    component: AboutPageComponent
  },
  {
    path: 'contact',
    component: ContactPagesComponent
  },
  {
    path: 'countries',
    loadChildren: () => import('./countries/countries.module').then( m=> m.CountriesModule )
  },

  {
    path:'**',
    redirectTo: 'countries'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot( routes),
  ],
  exports:[
    RouterModule
  ]

})
export class AppRoutingModule { }
