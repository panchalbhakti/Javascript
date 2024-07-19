//Ex:1
class fruits {
    constructor(name, color){
        this.name = name,
        this.color = color
    }
}

const fruit1 = new fruits ("Mango", "Yellow");
console.log(fruit1.name);
console.log(fruit1.color);
console.log(fruit1);

const fruit2 = new fruits ("Lychee", "Red");
console.log(fruit2.name);
console.log(fruit2.color);
console.log(fruit2);


//Ex:2
class cars {
    constructor(name, model){
        this.name = name,
        this.model = model
    }
}

const car1 = new cars("Scorpio", "z5000")
console.log(car1.name);
console.log(car1.model);
console.log(car1);

const car2 = new cars("Tesla", "Model S");
console.log(car2.name);  
console.log(car2.model); 
console.log(car2);


//Ex:3
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}

const person1 = new Person("Alice", 30);
console.log(person1.name); 
console.log(person1.age); 
console.log(person1);

const person2 = new Person("Bob", 25);
console.log(person2.name); 
console.log(person2.age);
console.log(person2);


//Ex:4
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
}

const book1 = new Book("The Great Gatsby", "F. Scott Fitzgerald");
console.log(book1.title); 
console.log(book1.author); 
console.log(book1);

const book2 = new Book("Harry Potter", "J.K. Rowling");
console.log(book2.title); 
console.log(book2.author);
console.log(book2);


// Ex:5
class Animal {
    constructor(name, type) {
        this.name = name;
        this.type = type;
    }
}

const animal1 = new Animal("Lion", "Mammal");
console.log(animal1.name); 
console.log(animal1.type); 
console.log(animal1);

const animal2 = new Animal("Eagle", "Bird");
console.log(animal2.name); 
console.log(animal2.type);
console.log(animal2);


//Ex:6
class Movie {
    constructor(title, director) {
        this.title = title;
        this.director = director;
    }
}

const movie1 = new Movie("Inception", "Christopher Nolan");
console.log(movie1.title);
console.log(movie1.director);
console.log(movie1);

const movie2 = new Movie("The Shawshank Redemption", "Frank Darabont");
console.log(movie2.title);   
console.log(movie2.director);
console.log(movie2);


//Ex:7
class Products {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

const products1 = new Products("Laptop", 1200);
console.log(products1.name);  
console.log(products1.price); 
console.log(products1);

const products2 = new Products("Smartphone", 800);
console.log(products2.name);  
console.log(products2.price);
console.log(products2);


//Ex:8
class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    calculateArea() {
        return this.width * this.height;
    }

    calculatePerimeter() {
        return 2 * (this.width + this.height);
    }
}

const ans = new Rectangle(5, 10);
console.log(ans.calculateArea());   
console.log(ans.calculatePerimeter());


//Ex:9
class MathUtils {
    static square(x) {
        return x * x;
    }

    static cube(x) {
        return x * x * x;
    }
}

console.log(MathUtils.square(5)); 
console.log(MathUtils.cube(3)); 


//Ex:10
class Product {
    constructor(name, price = 0, quantity = 1) {
        this.name = name;
        this.price = price;
        this.quantity = quantity;
    }
}

const product1 = new Product('Laptop', 1200);
const product2 = new Product('Phone', 800, 2);

console.log(product1);
console.log(product2);


//Ex:11
class Circle {
    constructor(radius) {
        this.radius = radius;
    }

    calculateArea() {
        return Math.PI * this.radius * this.radius;
    }

    calculateCircumference() {
        return 2 * Math.PI * this.radius;
    }
}

const circle = new Circle(5);
console.log(circle.calculateArea());       
console.log(circle.calculateCircumference()); 



//Ex:12
class Man {
    constructor(name) {
        this.name = name;
    }
}

const man1 = new Man("John");
console.log(man1.name); 


//Ex:13
class Customer {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

const customer1 = new Customer('Alice', 'alice@example.com');
const customer2 = new Customer('Bob', 'bob@example.com');
console.log(customer1.name);
console.log(customer2.name);
console.log(customer1);


//Ex:14
class Employee {
    constructor(name, position, salary) {
        this.name = name;
        this.position = position;
        this.salary = salary;
    }
}

const employee1 = new Employee('John Doe', 'Manager', 60000);
const employee2 = new Employee('Jane Smith', 'Developer', 80000);
console.log(employee1.salary);
console.log(employee2.position);


//Ex:15
class Address {
    constructor(street, city, zip) {
        this.street = street;
        this.city = city;
        this.zip = zip;
    }
}

const address1 = new Address('Gurukul', 'Ahmedabad', '382001');
const address2 = new Address('Satellite', 'Ahmedabad', '382456');
console.log(address1.zip);
console.log(address2.street);


//Ex:16
class Course {
    constructor(name, instructor, durationInWeeks) {
        this.name = name;
        this.instructor = instructor;
        this.durationInWeeks = durationInWeeks;
    }
}

const course1 = new Course('JavaScript Basics', 'John Smith', 4);
const course2 = new Course('Python Fundamentals', 'Jane Doe', 6);
console.log(course1.instructor);
console.log(course1)


//Ex:17
class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
        } else {
            console.log('Insufficient balance.');
        }
    }
}

const account1 = new BankAccount('1234567890');
const account2 = new BankAccount('9876543210', 5000);
console.log(account1);
console.log(account1);


//Ex:18
class Flight {
    constructor(flightNumber, departure, destination) {
        this.flightNumber = flightNumber;
        this.departure = departure;
        this.destination = destination;
    }
}

const flight1 = new Flight('AI101', 'New York', 'London');
const flight2 = new Flight('UA202', 'Los Angeles', 'Tokyo');
console.log(flight1.departure);
console.log(flight2.destination);
console.log(flight1);
console.log(flight2);


//Ex:19
class Computer {
    constructor(brand, model, cpu, ram) {
        this.brand = brand;
        this.model = model;
        this.cpu = cpu;
        this.ram = ram;
    }
}

const computer1 = new Computer('Apple', 'MacBook Pro', 'Intel i7', '16GB');
const computer2 = new Computer('Dell', 'XPS 15', 'Intel i9', '32GB');

//Ex:20
class Phone{
    constructor(name, brand, year){
        this.name = name,
        this.brand = brand,
        this.year = year
    }
}

const phone1 = new Phone("14 pro max", "apple", 2023)
console.log(phone1.name);
console.log(phone1);


//Ex:21
class App {
    constructor(name, releaseYear){
        this.name = name,
        this.releaseYear = releaseYear
    }
}

const app1 = new App("Whatsapp", 2010);
const app2 = new App("Facebook", 2014);
console.log(app1);
console.log(app2.name);


//Ex:22
class OOPs {
    constructor(name) {
        this.name = name;
    }
 
    get langName() {
        return this.name;
    }
 
    set langName(x) {
        this.name = x;
    }
}
 
let obj = new OOPs('JavaScript');
console.log(obj.name); 
 
obj.langName = 'Java';
console.log(obj.name);

//Ex:23
const Subject = {
    topic: 'OOPs',
    lang: 'JavaScript',
    sub_topics: {
        topic_1: 'Class',
        topic_2: 'Object'
    }
}
console.log(Subject.topic);
console.log(Subject.sub_topics.topic_1);
console.log(Subject["lang"]);
console.log(Subject.sub_topics["topic_2"]);


//Ex:24
class emp {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const emp1 = new emp("John", "25 years");
const emp2 = new emp("Daisy", "32 years")
console.log(emp1.name + " : " + emp1.age);
console.log(emp2.name + " : " + emp2.age);

//Ex:25
class Pen{
    constructor(name, color, price) {
    this.name = name;
    this.color = color;
    this.price = price;
}
}

const pen1 = new Pen("Marker", "Blue", "10");
console.log(pen1);


//Ex:26
class Pencil {
    constructor(name, color, price){
        this.name = name;
        this.color = color; 
        this.price = price;
    }
    
    showPrice(){
        console.log(`Price of ${this.name} is ${this.price}`);
    }
}

const pencil1 = new Pencil("Marker", "Blue", "20");
console.log(pencil1);
pencil1.showPrice();


//Ex:27
class People {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

const people1 = new People("Jack", 30);
const people2 = new People("Tina", 33);
 
people1.greet();
people2.greet();


//Ex:28
//Base Class
class Hero {
	constructor(name, team) {
		this.name = name;
		this.team = team;
	}
}

const hero1 = new Hero('Tony Stark', "Avengers");
console.log(hero1);

//Sub Class
class Young extends Hero {
	constructor(name, team, age) {
		super(name, team);
		this.age = age;
	}
}

const hero2 = new Young ("Thor", "Avenger", 23)
console.log(hero2);


//Ex:29
class Car {
    constructor(brand) {
      this.brand = brand;
    }
  }
  
class Model extends Car {
    constructor(brand, model) {
      super(brand);
      this.model = model;
    }
    present() {
        return 'I have a ' + this.model;
      }
  }
  
let myCar = new Model("Ford", "Mustang");
console.log(myCar);
myCar.present();


//Ex:30
class Pet {
    constructor(name) {
      this.speed = 0;
      this.name = name;
    }
    run(speed) {
      this.speed = speed;
      console.log(`${this.name} runs with speed ${this.speed}.`);
    }
}
  
let pet1 = new Pet("Golden Retriever");
console.log(pet1.name);
pet1.run(10);