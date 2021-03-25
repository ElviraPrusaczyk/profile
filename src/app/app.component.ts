import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  appTitle = 'Profile';
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
}
