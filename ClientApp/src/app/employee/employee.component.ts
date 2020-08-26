import { Component } from '@angular/core';


@Component( {
  selector: 'emp-component',
  templateUrl:'./employee/employee.component.html'
})
export class EmployeeComponent {
  firstName: string;
  lastName: string;
  gender: string;
  age: number
}
