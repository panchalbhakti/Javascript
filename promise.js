//Promise Example 1
function myDisplayer(output) {
    document.getElementById("demo").innerHTML = output;
  }

const myPromise = new Promise ((myResolve, myReject) => {
    let x = 6;
        if(x == 0 || x == 1){
            myResolve("1. Success");
        }
        else{
            myReject("1. Error");
        }
});

myPromise.then(
    function(value) {
        myDisplayer(value);
    },
    
    function(error) 
    {myDisplayer(error);

    }
  );


//Promise Example 2 
function showResult(result){
    document.getElementById("demo2").innerHTML = result;
}

const promise2 = new Promise ((resolve, reject) => {
    let name = "Bhakti";
    if(name == "Bhakti"){
        resolve("2. True");
    }
    else{
        reject("2. Incorrect Name");
    }
});

promise2.then(
    function(True){
        showResult(True);
    },
    function(False){
        showResult(False);
    }

)


//Promise Example 3
function displayer(x) {
    document.getElementById("demo3").innerHTML = x;
}

const fetchData = new Promise((resolve, reject) => {
    let success = false;
        if (success) {
            resolve("3. Data fetched successfully!");
        } else {
            reject("3. Failed to fetch data.");
        }
});

fetchData.then(
    function(value) {
        displayer(value); 
    },
    function(error) {
        displayer(error);
    }
);


//Promise Example 4  - in console panel
function checkVote(age) {
    return new Promise((resolve, reject) => {
        if(age >= 18){
            resolve("You can vote");
        }
        else{
            reject("Sorry, you cannot vote");
        }
    })
}

checkVote(19)
    .then((message) => {
    console.log(message); 
  })
    .catch((errorMessage) => {
    console.log(errorMessage); 
  });


//Promise Example 5 - in console panel
function canWithdraw(balance, amount){
    return new Promise((resolve, reject) => {
        if(balance >= amount) {
            resolve("You can withdraw your money");
        }
        else{
            reject("You cannot withdraw your money");
        }
    })
}

canWithdraw(50, 49)
        .then((value) => {
        console.log(value);
    })
        .catch((error) => {
        console.log(error);
    });


//Promise Example 6 
function usern(name) {
    let usernameList = ["Daisy"];
    return new Promise((resolve, reject) => {
      if (usernameList.includes(name)) {
        reject("Username not available");
      } 
      else {
        resolve("Username available");
      }
    });
}

async function user(name) {
    const value = await usern(name);
    console.log(value);
}
    
user("John");


//Promise Example 7 
function laptopPrice(price){
    return new Promise((resolve, reject) => {
        if(price >= 90000){
            resolve("You can buy mac")
        }
        else{
            reject("You cannout buy mac")
        }
    })
}

laptopPrice(100000)
 .then((value) => {
    console.log(value);
 })
 .catch((error) => {
    console.log(error);
 });


 //Promise Example 8
function checkMarks(marks){
    return new Promise((resolve, reject) => {
        if(marks <= 33){
            reject("You have failed");
        }
        else{
            resolve("You have passed");
        }
    })
}

checkMarks(34)
 .then((value) => {
    console.log(value);
 })
 .catch((error) => {
    console.log(error);
 })


//Promise Example 9
function checkTemperature(temp){
    return new Promise((resolve, reject) => {
        if(temp >= 30){
            resolve("It's hot outside");
        } else {
            reject("It's cold outside");
        }
    });
}

async function evaluateTemperature(temp) {
        const value = await checkTemperature(temp);
        console.log(value);
} 

evaluateTemperature(35);


//Ex: 10
function checkFuel(fuel){
    return new Promise((resolve, reject) => {
        if(fuel >= 50){
            resolve("You have enough fuel for the trip");
        } else {
            reject("You do not have enough fuel for the trip");
        }
    });
}

async function fuel(fuel){
    const value = await checkFuel(fuel);
    console.log(value);
}

fuel(60);


//Ex: 11 
function checkHeight (height){
    return new Promise((resolve, reject) => {
        if(height >= 5){
            resolve("You are tall enough to ride");
        }
        else{
            reject("You are not tall enough to ride");
        }
    })
}

async function height(height){
    const value = await checkHeight(height);
    console.log(value);
}

height(6);


//Ex: 12
function checkTemperature(temp){
    const outcomes = {
        hot: "It's hot outside",
        cold: "It's cold outside"
    };
    
    return new Promise((resolve, reject) => {
        const outcome = temp >= 30 ? outcomes.hot : outcomes.cold;
        temp >= 30 ? resolve(outcome) : reject(outcome);
    });
}

async function evaluateTemperature(temp) {
        const value = await checkTemperature(temp);
        console.log(value);
}

  
//Ex: 13
function checkScore(score){
    return new Promise((resolve, reject) => {
        if(score >= 85){
            resolve("You qualify for a scholarship");
        } else {
            reject("You do not qualify for a scholarship");
        }
    });
}

checkScore(90)
 .then((value) => {
    console.log(value);
 })
 .catch((error) => {
    console.log(error);
 });



//Ex: 14
function checkSpeed(speed){
    return new Promise((resolve, reject) => {
        if(speed > 70){
            resolve("You are speeding");
        } else {
            reject("You are within the speed limit");
        }
    });
}

checkSpeed(75)
 .then((value) => {
    console.log(value);
 })
 .catch((error) => {
    console.log(error);
 });


//Ex: 15
function isEven(number) {
    return new Promise((resolve, reject) => {
        if(number % 2 === 0) {
            resolve("The number is even");
        } else {
            reject("The number is odd");
        }
    });
}

async function even(number){
    const value = await isEven(number);
    console.log(value);
}

even(3);


//Ex: 16
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
        if(str.length > 5) {
            resolve("The string length is greater than 5");
        } else {
            reject("The string length is less than 5");
        }
    });
}

checkStringLength("Hell")
 .then((value) => {
    console.log(value);
 })
 .catch((error) => {
    console.log(error);
 });


//Ex: 17
function isPrime(number){
    return new Promise((resolve, reject) => {
        if(number <= 1){
            reject("The number is not prime");
        }
        for(let i = 2; i < number; i++) {
            if(number % i === 0) {
                reject("The number is not prime");
                return;
            }
        }
        resolve("The number is prime");
    })
}

isPrime(7)
 .then((value) => {
    console.log(value);
 })
 .catch((error) => {
    console.log(error);
 });


//Ex: 18
function isPositive(number) {
    return new Promise((resolve, reject) => {
        if(number > 0) {
            resolve("The number is positive");
        } else {
            reject("The number is not positive");
        }
    });
}

async function positive(number){
    const value = await isPositive(number);
    console.log(value);
}

positive(-1);


//Ex: 19
function isMultipleOfThree(number) {
    return new Promise((resolve, reject) => {
        if(number % 3 === 0) {
            resolve("The number is a multiple of 3");
        } else {
            reject("The number is not a multiple of 3");
        }
    });
}

isMultipleOfThree(9)
 .then((value) => {
    console.log(value);
 })
 .catch((error) => {
    console.log(error);
 });


 //Ex: 20
 function isArrayNotEmpty(arr) {
    return new Promise((resolve, reject) => {
        if(arr.length > 0) {
            resolve("The array is not empty");
        } else {
            reject("The array is empty");
        }
    });
}

isArrayNotEmpty([1, 2, 3])
 .then((value) => {
    console.log(value);
 })
 .catch((error) => {
    console.log(error);
 });


//Ex:21
function uploadFile(fileSize) {
    return new Promise((resolve, reject) => {
        if(fileSize > 300){
            reject("You cannot upload the file");
        }
        else{
            resolve("you can upload the file");
        }
    });
}

uploadFile(350)
    .then((value) => {
    console.log(value);
    })
    .then((error) => {
    console.log(error);
    });


//Ex: 22
function checkNetworkConnection(status) {
    return new Promise((resolve, reject) => {
        if (status === "online") {
            resolve("You are connected to the network");
        } else {
            reject("You are offline");
        }
    });
}

checkNetworkConnection("online")
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


//Ex:23
function checkApiResponse(status) {
    return new Promise((resolve, reject) => {
        if (status === 200) {
            resolve("API call was successful");
        } else {
            reject("API call failed");
        }
    });
}

checkApiResponse(200)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


//Ex:24
function connectToDatabase(isConnected) {
    return new Promise((resolve, reject) => {
        if (isConnected) {
            resolve("Connected to the database");
        } else {
            reject("Failed to connect to the database");
        }
    });
}

connectToDatabase(true)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


//Ex: 25
function getWeatherForecast(forecast) {
    return new Promise((resolve, reject) => {
        if (forecast === "sunny") {
            resolve("The weather is sunny");
        } else {
            reject("The weather is not sunny");
        }
    });
}

getWeatherForecast("sunny")
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


//Ex: 26
function processPayment(isSuccessful) {
    return new Promise((resolve, reject) => {
        if (isSuccessful) {
            resolve("Payment processed successfully");
        } else {
            reject("Payment failed");
        }
    });
}

processPayment(true)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


//Ex: 27
function checkStockAvailability(stock) {
    return new Promise((resolve, reject) => {
        if (stock > 0) {
            resolve("Stock is available");
        } else {
            reject("Out of stock");
        }
    });
}

checkStockAvailability(10)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });



//Ex: 28
function checkPasswordStrength(password) {
    return new Promise((resolve, reject) => {
        if (password.length >= 8) {
            resolve("Password is strong");
        } else {
            reject("Password is weak");
        }
    });
}

checkPasswordStrength("abcdefghijklmnop")
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


//Ex: 29
function isTaskCompleted(isCompleted) {
    return new Promise((resolve, reject) => {
        if (isCompleted) {
            resolve("Task completed successfully");
        } else {
            reject("Task not completed");
        }
    });
}

isTaskCompleted(true)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });


//Ex: 30
function checkIfAdult(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("The user is an adult");
        } else {
            reject("The user is not an adult");
        }
    });
}

checkIfAdult(16)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });

checkIfAdult(20)
    .then((value) => {
        console.log(value);
    })
    .catch((error) => {
        console.log(error);
    });



