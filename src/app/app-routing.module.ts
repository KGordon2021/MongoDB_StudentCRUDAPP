import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { StudentsComponent } from './students/students.component';
import { AddstudentComponent } from './addstudent/addstudent.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  {path: 'viewAll', component: StudentsComponent},
  {path: 'add', component: AddstudentComponent},
  {path: 'edit/:id', component: UpdateStudentComponent}
  // {path: 'student', component: StudentsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
