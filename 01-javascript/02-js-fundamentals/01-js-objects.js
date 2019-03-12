// 30 minutes max
//------------------------------Challenge 1-----------------------------------------------
// Write a function that accepts an array of student objects, as shown below. Print all of the students' names and their cohorts.
let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

function studentCohort (arr){
    for (let element in arr){
        console.log('Name: ' + arr[element].name + ', Cohort: ', arr[element].cohort)
    }
}
studentCohort(students)


//------------------------------Challenge 2-----------------------------------------------
// Write a function that accepts an object of users divided into employees and managers,
//  and display the number of characters per employee/manager's name
let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

 function objDisplay(obj){
     for(let element in obj){
        console.log(element.toUpperCase())
        for(let [index, user] of users[element].entries()){
            nameLength = user.first_name.length + user.last_name.length;
            console.log(++index + ' - ' + user.last_name + ', ' + user.first_name + ' - ' + nameLength);
        }
     }
 }
 objDisplay(users)
