import { Component, EventEmitter, Input, Output, OnInit, ElementRef, ViewChild, inject } from '@angular/core';
import {FormControl, Validators } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import { StudentInterface } from '../interfaces/studentInterface';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { AddressInterface } from '../interfaces/addressInterface';
import { StudentAddressInterface } from '../interfaces/studentAddressInterface';
import { SharedAttributeInstanceInterface } from '../interfaces/sharedAttributeInstanceInterface';
import {MatSelectModule} from '@angular/material/select';




@Component({
  selector: 'app-student-address',
  standalone: true,
  imports: [
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatDividerModule,
    MatButtonModule,
    FormsModule,
    MatIconModule,
    SnackbarComponent,
    MatCardModule,
    MatSelectModule
  ],
  templateUrl: './student-address.component.html',
  styleUrl: './student-address.component.css'
})
export class StudentAddressComponent {
  constructor(private _snackBar: MatSnackBar)
  {

  }
  
  @ViewChild('studentAddressForm') studentAddressForm!: NgForm;
  @Input({required: true}) studentAddress!: AddressInterface;
  @Output() submittedStudentAddress!: EventEmitter<AddressInterface>;
  states : SharedAttributeInstanceInterface[] = STATES;  
  studentAddressData!: AddressInterface;


  onSubmit(form: NgForm)
  { 
      this.studentAddressData = form.value.studentAddressData;
      this.studentAddress = this.studentAddressData;
      this.studentAddressForm.reset();
      this.studentAddressForm.setValue({
        studentAddressData: this.studentAddress
      })
      this.openSnackBar()
      this.submittedStudentAddress.emit(this.studentAddressData);
  }

  onCancel()
  {
    this.studentAddressForm.reset();
    this.studentAddressForm.setValue({
        studentAddressData: this.studentAddress
    })
  }

  openSnackBar()
  {
    this._snackBar.openFromComponent(SnackbarComponent,{
      duration: 3 * 1000
    })
  }

}


const STATES = [
  {id: 2, code:	"GAUTENG", description: "Gauteng", name: "Gauteng"},
  {id: 3, code:	"MPUMALANGA", description: "Mpumalanga", name: "Mpumalanga"},
  {id: 4, code:	"KWAZULU-NATAL", description: "KwaZulu-Natal", name: "KwaZulu-Natal"},
  {id: 5, code:	"NORTH-WEST", description: "North West", name: "North West"},
  {id: 6, code:	"LIMPOPO", description: "Limpopo", name: "Limpopo"},
  {id: 7, code:	"WESTERN-CAPE", description: "Western Cape", name: "Western Cape"},
  {id: 8, code:	"FREE-STATE", description: "Free State", name: "Free State"},
  {id: 9, code:	"EASTERN-CAPE", description: "Eastern Cape", name: "Eastern Cape"},
  {id: 10, code:	"NORTHERN-CAPE", description: "Northen Cape", name: "Northen Cape"},
]