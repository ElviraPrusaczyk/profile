import {NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SocialMediaLinksComponent } from './profile/social-media-links/social-media-links.component';
import { PublicationsComponent } from './profile/publications/publications.component';
import { ResearchComponent } from './profile/research/research.component';
import { ContactComponent } from './profile/contact/contact.component';
import { TeachingComponent } from './profile/teaching/teaching.component';
import { AboutComponent } from './profile/about/about.component';
import { NavigationMenuComponent } from './navigation-menu/navigation-menu.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './profile/home/home.component';
import { PresentationsComponent } from './profile/presentations/presentations.component';
import { ProfileComponent } from './profile/profile.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    AppComponent,
    SocialMediaLinksComponent,
    PublicationsComponent,
    ResearchComponent,
    ContactComponent,
    TeachingComponent,
    AboutComponent,
    NavigationMenuComponent,
    HomeComponent,
    PresentationsComponent,
    ProfileComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
