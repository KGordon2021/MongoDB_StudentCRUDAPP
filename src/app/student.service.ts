import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  addStudent(student: any) {
    return this.http.post('http://localhost:4000/api/create', student)
  }

  viewStudents() {
    return this.http.get('http://localhost:4000/api');
  }

  viewSelectedStudent(id:any) {
    return this.http.get('http://localhost:4000/api/find/'+id);
  }

  updateStudent(id: any, student:any) {
    return this.http.put('http://localhost:4000/api/update/'+id, student);
  }

  removeStudents(id:any) {
    return this.http.delete('http://localhost:4000/api/remove/'+id);
  }
}
