import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  firstName = 'Elvira';
  lastName = 'Prusaczyk';
  fullName = this.firstName  + ' ' +  this.lastName;

  industry = 'Social Psychology';
  occupations: Array<string> = ['RESEARCH SCIENTIST', 'WRITER', 'PHD CANDIDATE'];
  profilePicSrc = 'assets/images/MyProfilePic.jpg';
  buttonMyWebsite = 'My Website';
  quotes: Array<string> =
    ['“I have a huge and savage conscience that won\'t let me get away with things.” ― OCTAVIA E. BUTLER',
      '', ''];

  constructor() { }

  ngOnInit(): void {
  }
  submit(): void {
    console.log('Button submitted');
  }

}
