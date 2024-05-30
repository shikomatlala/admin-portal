import { Component, Input } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { StudentInterface } from '../interfaces/studentInterface';


@Component({
  selector: 'app-student-page-heading',
  standalone: true,
  imports: [
    MatCardModule,
    MatIconModule,
    MatDividerModule
  ],
  templateUrl: './student-page-heading.component.html',
  styleUrl: './student-page-heading.component.css'
})
export class StudentPageHeadingComponent {
  @Input({required: true}) student!: StudentInterface

}
