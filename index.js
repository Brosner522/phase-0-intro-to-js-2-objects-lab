// Write your solution in this file!
const employee = {
    name: "Sam",
    streetAddress: "12 Broadway"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return Object.assign({}, employee, { [key]: value });
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const newObj = Object.assign({}, employee);
    delete newObj [key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey (emplployee, key) {
    delete employee[key];
    return employee;
}