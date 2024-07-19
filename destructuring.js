//Ex:1
const number = [1, 2, 3];

const [a, b, c] = number;

console.log(a);
console.log(b); 
console.log(c); 


//Ex: 2
const numbers = [1, 2, 3, 4, 5];

const [first, , third, , fifth] = numbers;

console.log(first); 
console.log(third); 
console.log(fifth);


//Ex: 3
const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const [monday, , wednesday, , friday, , sunday] = days;

console.log(monday); 
// console.log(tuesday);  this will give error, so we can access only those element which are defined
console.log(wednesday); 
console.log(friday);   
console.log(sunday);


//Ex:4 
const nestedArray = [1, [2, 3], 4];

const [one, [two, three], four] = nestedArray;

console.log(one); 
console.log(two);
console.log(three); 
console.log(four); 


//Ex: 5 - Destructuring of array
const userData = [
    ["John", "Cena", 30], 
    ["Engineer", "Ahmedabad"],
    ["john.cena@example.com", "500000000"],
    ["Swmimmg", "Reading"] 
];

const [
    [firstName, lastName, age],
    [job, city],
    [email, phone],
    [hobby1, hobby2]
] = userData;

console.log(firstName, lastName)
console.log(age); 
console.log(job); 
console.log(city);
console.log(email);
console.log(phone);
console.log(hobby1);
console.log(hobby2);