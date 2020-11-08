
export class Employees {
    id: string;
    fullName_FL: string;
    fullName_SL: string;
    hiringDate: string;
    firstContractingSalary: string;
    position: {
        id: string;
        name_FL: string;
        name_SL: string;
    };
    department: {
        id: string;
        name_FL: string;
        name_SL: string;
    };
    employeeJobStatuses: [EmployeeJobStatuses]

}
export class Employee {
    id: string;
    fullName_FL: string;
    fullName_SL: string;
    hiringDate: string;
    firstContractingSalary: string;
}

export class Position {
    id: string;
    name_FL: string;
    name_SL: string;
}
export class Department {
    id: string;
    name_FL: string;
    name_SL: string;
}
export class EmployeeJobStatuses {

    id: string;
    status: string;
    type: string;
    terminationDate: string;
    suspendFromDate: string;
    suspendToDate: string;

}


