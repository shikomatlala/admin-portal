import { Component, EventEmitter, Input, Output, OnInit, ElementRef, ViewChild, inject } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, NgForm} from '@angular/forms';
import { StudentInterface } from '../interfaces/studentInterface';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';
import {ErrorStateMatcher} from '@angular/material/core';
import { SnackbarComponent } from '../snackbar/snackbar.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';





@Component({
  selector: 'app-student-profile',
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
    MatCardModule
  ],
  templateUrl: './student-profile.component.html',
  styleUrl: './student-profile.component.css'
})
export class StudentProfileComponent{
  constructor( private _snackBar: MatSnackBar)
  {

  }
  @ViewChild('studentProfileForm') studentProfileForm!: NgForm;
  @Input({required: true}) student! : StudentInterface;
  @Output() submittedStudentProfile!: EventEmitter<StudentInterface>;
 
  studentData!: StudentInterface;
  onSubmit(form: NgForm)
  {
    this.studentData = form.value.studentProfileData;
    this.student = this.studentData;
    this.studentProfileForm.reset();
    this.studentProfileForm.setValue({
      studentProfileData: this.student
    });
    this.openSnackBar();
    this.submittedStudentProfile.emit(this.studentData);
  }

  onCancel()
  {
    this.studentProfileForm.reset();
    this.studentProfileForm.setValue({
      studentProfileData: this.student
    });
  }

  openSnackBar()
  {
    this._snackBar.openFromComponent(SnackbarComponent,{
      duration: 3 * 1000
    })
  }

}

