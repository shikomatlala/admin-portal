import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentProfileComponent } from './student-profile/student-profile.component';
import { FormsModule } from '@angular/forms';
import { StudentPageHeadingComponent } from './student-page-heading/student-page-heading.component';
import { StudentAddressComponent } from './student-address/student-address.component';
import { StudentAddressInterface } from './interfaces/studentAddressInterface';
import { AddressInterface } from './interfaces/addressInterface';




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    StudentProfileComponent,
    FormsModule,
    StudentPageHeadingComponent,
    StudentAddressComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'admin-portal';
  studentAddress: AddressInterface = StudentAddress;
  student = {
    studentNumber: "216955960",
    emailAddress: "216955960@tut4life.ac.za",
    gender: "Female",
    firstName: "Shiko Boipelo",
    lastName: "Matlala",
    idNumber: "9511270418082",
    contactNumber: "0765870538",
  }
}


const StudentAddress = {
  "country": "South Africa",
  "formattedAddress": "276 Orient St, Arcadia, Pretoria, 0007, South Africa",
  "streetNumber": "276",
  "city": "Pretoria",
  "postalCode": "0007",
  "latitude": -25.7458858,
  "suburb": "Arcadia",
  "state": "Gauteng",
  "line2": null,
  "line1": "Orient Street",
  "longitude": 28.2252048
}