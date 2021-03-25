import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})

export class ProfileComponent implements OnInit {

  firstName = 'Elvira';
  lastName = 'Prusaczyk';
  fullName = this.firstName  + ' ' +  this.lastName;

  industry = 'Social Psychology';
  occupations: Array<string> = ['RESEARCH SCIENTIST', 'WRITER', 'PHD CANDIDATE'];
  profilePicSrc = 'assets/images/MyProfilePic.jpg';
  buttonMyWebsite = 'My Website';


  constructor() { }

  ngOnInit(): void {
  }
  submit(): void {
    console.log(this.buttonMyWebsite + 'Button submitted');
  }

}
