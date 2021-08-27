import { Injectable } from '@angular/core';
import { Department } from '../interfaces/department';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartmentsService {

  constructor(
    private http: HttpClient,
  ) { }

  departments: Department[] = [
    {id: '1', name: 'Customer Success'},
    {id: '2', name: 'Sales'},
    {id: '3', name: 'Finance'},
  ];

  getDeparments(): Observable<Department[]> {
    return this.http.get<Department[]>(`https://hr-timesheet-test.firebaseio.com/departments.json`);
  }
}