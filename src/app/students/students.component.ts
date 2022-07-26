import { Router } from '@angular/router';
import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
  students: any;

  constructor( private studentService: StudentService,
    private routes: Router,
    private location: Location
    ) { }

  ngOnInit(): void {
    this.viewRecords()
  }

  goBack() {
    this.location.back();
  }

  viewRecords() {
    return this.studentService.viewStudents().subscribe((data:any)=> {
      //console.log(data)
      this.students = data
    })
  }

  remove(datas: any){
    // alert("Student " + data.name + " has been removed")
    // this.studentService.removeStudents(data._id).subscribe( () =>
    //   console.log(data)
    // );
    // this.routes.navigate(['/viewAll'])
    this.studentService.removeStudents(datas._id).subscribe((data:any)=> {
    console.log(data);
    this.students = this.students.filter((u:any)=>u!==datas)// finds the data that was deleted and filters it out and reassigns the remaining ones back to the array

    })
  }
}
