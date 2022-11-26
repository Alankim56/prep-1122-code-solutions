const person = { firstName: 'Michael', lastName: 'Scott', hobby: 'Magician' };
console.log(person);
const fullName = person.firstName + ' ' + person.lastName;
console.log('His fullName is:', fullName);
person.job = 'manager';
console.log('His current job is:', person.job);
person.previousJob = 'salesman';
console.log('His previous job was:', person.previousJob);
console.log(person);
