import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from './profile/home/home.component';
import {AboutComponent} from './profile/about/about.component';
import {ResearchComponent} from './profile/research/research.component';
import {PublicationsComponent} from './profile/publications/publications.component';
import {PresentationsComponent} from './profile/presentations/presentations.component';
import {ContactComponent} from './profile/contact/contact.component';
import {TeachingComponent} from './profile/teaching/teaching.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'research', component: ResearchComponent },
  { path: 'publications', component: PublicationsComponent },
  { path: 'presentations', component: PresentationsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'teaching', component: TeachingComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
