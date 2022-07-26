import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  addStudent: any;
  constructor(private fb: FormBuilder,
    private routes:Router,
    private studentsService: StudentService
    ) {
      this.addStudent = fb.group ({
        name: ['', Validators.required],
        email: ['', Validators.required],
        cohort: ['', Validators.required],
        phoneNumber: ['', Validators.required],
      })
    }

  ngOnInit(): void {
  }

  onSubmit() {
    this.studentsService.addStudent(this.addStudent.value).subscribe((data:any)=> {
      console.log(data);
      this.routes.navigate(['/viewAll'])
    })
    console.log(this.addStudent.value)
  }
}
