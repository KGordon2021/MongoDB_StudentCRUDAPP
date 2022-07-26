import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from './../student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  addStudent: any;
  id: any;
  constructor(private fb: FormBuilder,
    private routes:Router,
    private studentsService: StudentService,
    private url: ActivatedRoute
    ) {
      this.addStudent = fb.group ({
        name: ['', Validators.required],
        email: ['', Validators.required],
        cohort: ['', Validators.required],
        phoneNumber: ['', Validators.required],
      })
    }

  ngOnInit(): void {
    this.viewSelectedStudent();
  }

  viewSelectedStudent() {
    this.id = this.url.snapshot.params['id'];
    // this.studentsService.updateStudents()
    console.log(this.id);
    this.studentsService.viewSelectedStudent(this.id).subscribe((data) =>{
      this.addStudent.patchValue(data);
    })
  }

  onSubmit() {
    this.id = this.url.snapshot.params['id'];
    this.studentsService.updateStudent(this.id, this.addStudent.value).subscribe((data:any)=> {
      console.log(data);
      this.routes.navigate(['/viewAll'])
    })
    console.log(this.addStudent.value)
  }

}
