const employee = {
    name: "Sam",
    streetAddress: "1234 5th"
};


function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};
    updatedEmployee[key] = "11 Broadway";
    return updatedEmployee;
};

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee.streetAddress = "12 Broadway";
    return employee;
};

function deleteFromEmployeeByKey(employee, obj, key) {
    const updatedEmployee = {...employee};
    delete updatedEmployee.name;
    return updatedEmployee;
};

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee.name
    return employee;
}