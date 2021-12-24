const employees = [];

function Employee(name, title, salary, status = "Full Time") {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = status;
};

Employee.prototype.printEmployeeForm = () => {
    console.log(
        "Name: " + this.name + ", " +
        "Title: " + this.title + ", " +
        "Salary: " + this.salary + ", " +
        "Status: " + this.status
    );
};

const firstEmployee = employees.push(new Employee("Frank", "Lead Developer", "$160,000"));
const secondEmployee = employees.push(new Employee("Terry", "Consultant", "$120/hr", "Contract"));
const thirdEmployee = employees.push(new Employee("Owen", "Intern", "$25/hr", "Part Time"));

console.log(employees)