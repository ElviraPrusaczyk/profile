import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-social-media-links',
  templateUrl: './social-media-links.component.html',
  styleUrls: ['./social-media-links.component.css']
})

export class SocialMediaLinksComponent implements OnInit {
  brockEmail = 'mailto:ep15je@brocku.ca';
  googleScholar = 'https://scholar.google.ca/citations?user=hIYIRIMAAAAJ&hl=en';
  orcid = 'http://orcid.org/0000-0003-0252-4978';
  twitter = 'https://twitter.com/elviraprusaczyk';
  womenHealthAward = 'https://brocku.ca/brock-news/2018/08/brock-grad-student-wins-provincial-womens-health-award/';
  interGroupLab = 'https://brocku.ca/intergroup-lab/people/';
  buttonMyWebsite = 'My Website';

  constructor() {
  }
  ngOnInit(): void {
  }
  submit(): void {
    console.log(this.buttonMyWebsite + 'Button submitted');
  }
}
