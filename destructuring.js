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


//Ex: 6
const userNum = [2343, 3323, 4323];
const [num1, num2, num3] = userNum;

console.log(num1);
console.log(num2, num3);


//Ex:7
const movies = ["Jumanji", "Thursday", "Train to Busan"];
const [movie1, ,movie3] = movies;

console.log(movie1);
console.log(movie3);
// console.log(movie2); Give error as movie2 is not defined.


//Ex: 8
const scores = [10, 20, 30, 40];
const [score1, score2, ...restScores] = scores;

console.log(score1); 
console.log(score2); 
console.log(restScores); 


//Ex: 9
const alphabet = ["A", "B", "C", "D", "E"];
const [firstLetter, secondLetter, , fourthLetter] = alphabet;

console.log(firstLetter); 
console.log(secondLetter);
console.log(fourthLetter);


//Ex: 10
const coordinates = [10, 20];
const [x, y] = coordinates;

console.log(x); 
console.log(y); 


//Ex: 11
const data = [
    ["Alice", 24],
    ["Bob"],
    ["Charlie", 30]
];

const [firstUser, secondUser, thirdUser] = data;

const [name1, age1 = "Unknown"] = firstUser;
const [name2, age2 = "Unknown"] = secondUser;
const [name3, age3 = "Unknown"] = thirdUser;

console.log(`${name1}, Age: ${age1}`);
console.log(`${name2}, Age: ${age2}`);
console.log(`${name3}, Age: ${age3}`); 


//Ex: 12
const products = [
    ["Laptop", 1200],
    ["Mouse"], // Price is missing
    ["Keyboard", 75]
];

const [p1, p2, p3] = products;

console.log(p1); 
console.log(p2); 
console.log(p3);


//Ex: 13
const database = [1, 2, 3, 4, 5, 6, 7];
const [d1, d2, d3, d4, d5, d6, d7] = database;

console.log(d1, d2, d3, d4, d5, d6, d7);


//Ex: 14
const profile = ["Tony", "Software Developer", "New York"];
const [name, profession, area] = profile;

console.log(name);
console.log(profession);
console.log(area);


//Ex: 15
const array = [5, 10];
const [numA = 1, numB = 2, numC = 3] = array; //default values

console.log(numA);
console.log(numB);
console.log(numC);


//Ex: 16
const nested = [1, [2, [3, 4]]];
const [m, [n, [o, p]]] = nested;

console.log(m);
console.log(n); 
console.log(o);
console.log(p); 


//Ex: 17
const colors = ["Red", "Green", "Blue", "Yellow"];
const [primary1, primary2, ...otherColors] = colors;

console.log(primary1); 
console.log(primary2);
console.log(otherColors);


//Ex:18
const values = [1, undefined, 3];
const [val1, val2 = 2, val3] = values;

console.log(val1);
console.log(val2); 
console.log(val3);


//Ex:19
const people = [
    ["Alice", "Smith"],
    ["Bob", "Brown"],
    ["Charlie", "Johnson"]
];

const [[firstName1, lastName1], , [firstName3, lastName3]] = people;

console.log(firstName1, lastName1);
console.log(firstName3, lastName3);


//Ex:20
const settings = ["dark", "large"];
const [theme, fontSize = "medium"] = settings;

console.log(theme); // dark
console.log(fontSize); // large


//Ex:21
const languages = ["JavaScript", "Python", "C++"];
const [firstLang, secondLang, thirdLang] = languages;

console.log('Languages:', firstLang, secondLang, thirdLang);


//Ex:22
const tiles = ["waves", "lines", "bricky"];

const [tile1, tile2, tile3] = tiles;

console.log(tile1);
console.log(tile2);
console.log(tile3);


//Ex:23
const cols = [["sky blue", "navy blue"], "red", "black"];
const [color1, color2, color3] = cols;

console.log(color1);
console.log(color2);


//Ex:24
const car = {
    brand: "Toyota",
    model: "Corolla",
    specs: ["Automatic", "Hybrid"]
};

const { brand, model, specs: [transmission, type] } = car;

console.log('Brand:', brand, 'Model:', model);
console.log('Transmission:', transmission, 'Type:', type);


//Ex:25
