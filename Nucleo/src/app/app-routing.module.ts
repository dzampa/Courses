import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { ContactComponent } from './contact/contact.component';
import { ClientsComponent } from './clients/clients.component';
import { ExperienceComponent } from './experience/experience.component';

const routes: Routes = [  
  { path: '', 
    redirectTo: 'index', 
    pathMatch: 'full' 
  },
  {
    path: 'index',
    component: MainPageComponent,
  },
  {
    path: 'services',
    component: ExperienceComponent,      
  },
  {
    path: 'clients',
    component: ClientsComponent,      
  },
  {
    path: 'contact',
    component: ContactComponent,      
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
