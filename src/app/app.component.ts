import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'VIEWCHILD';

  @ViewChild('dateIn') dateOfBirth: ElementRef | undefined;
  @ViewChild('ageIn') age: ElementRef | undefined;

  calculateAge() {
    let birthYear = new Date(this.dateOfBirth?.nativeElement.value).getFullYear();
    let currentYear = new Date().getFullYear();
    let age = currentYear - birthYear;
    if (this.age != undefined) {
      this.age.nativeElement.value = age;
    }
    // console.log(this.dateOfBirth);
    // console.log(this.age);

  }
}
