import {Injectable} from 'angular2/core';
import {Employee} from '../models/employee';
import {EMPLOYEES} from '../data/employee-data';

@Injectable()
export class EmployeeService {
    NEW_ID = 16;
    data = EMPLOYEES;

    constructor() { }

    getEmployees() {
        return Promise.resolve(this.data);
    }

    getEmployee(id: number) {
        return Promise.resolve(this.data)
            .then(employees => employees.filter(employee => employee.id === id)[0]);
    }

    addEmployee(employee: Employee) {
        let today = new Date();
        let month = today.getMonth() + 1;
        let date = today.getDate();
        let year = today.getFullYear();

        if (!employee.id) {
            employee.id = this.NEW_ID++;
        }

        if (!employee.createDate) {
            employee.createDate = `${month}/${date}/${year}`;
        }
        return Promise.resolve(this.data)
            .then(employees => employees.push(employee));
    }

    removeEmployee(employee: Employee) {
        let index = this.data.indexOf(employee);
        return Promise.resolve(this.data)
        .then(employees => employees.splice(index, 1));
    }
}