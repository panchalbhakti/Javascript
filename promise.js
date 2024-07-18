// //Promise Example 1
// function myDisplayer(output) {
//     document.getElementById("demo").innerHTML = output;
//   }

// const myPromise = new Promise ((myResolve, myReject) => {
//     let x = 6;
//         if(x == 0 || x == 1){
//             myResolve("1. Success");
//         }
//         else{
//             myReject("1. Error");
//         }
// });

// myPromise.then(
//     function(value) {
//         myDisplayer(value);
//     },
    
//     function(error) 
//     {myDisplayer(error);

//     }
//   );


// //Promise Example 2 
// function showResult(result){
//     document.getElementById("demo2").innerHTML = result;
// }

// const promise2 = new Promise ((resolve, reject) => {
//     let name = "Bhakti";
//     if(name == "Bhakti"){
//         resolve("2. True");
//     }
//     else{
//         reject("2. Incorrect Name");
//     }
// });

// promise2.then(
//     function(True){
//         showResult(True);
//     },
//     function(False){
//         showResult(False);
//     }
// 
// )


// //Promise Example 3
// function displayer(x) {
//     document.getElementById("demo3").innerHTML = x;
// }

// const fetchData = new Promise((resolve, reject) => {
//     let success = false;
//         if (success) {
//             resolve("3. Data fetched successfully!");
//         } else {
//             reject("3. Failed to fetch data.");
//         }
// });

// fetchData.then(
//     function(value) {
//         displayer(value); 
//     },
//     function(error) {
//         displayer(error);
//     }
// );


// //Promise Example 4  - in console panel
// function checkVote(age) {
//     return new Promise((resolve, reject) => {
//         if(age >= 18){
//             resolve("You can vote");
//         }
//         else{
//             reject("Sorry, you cannot vote");
//         }
//     })
// }

// checkVote(19)
//     .then((message) => {
//     console.log(message); 
//   })
//     .catch((errorMessage) => {
//     console.log(errorMessage); 
//   });


// //Promise Example 5 - in console panel
// function canWithdraw(balance, amount){
//     return new Promise((resolve, reject) => {
//         if(balance >= amount) {
//             resolve("You can withdraw your money");
//         }
//         else{
//             reject("You cannot withdraw your money");
//         }
//     })
// }

// canWithdraw(5000, 6000)
//         .then((value) => {
//         console.log(value);
//     })
//         .catch((error) => {
//         console.log(error);
//     });


// //Promise Example 6 
// function username(name) {
//     let usernameList = ["Daisy", "John", "Bells", "Jerry"];
//     return new Promise((resolve, reject) => {
//       if (usernameList.includes(name)) {
//         reject("Username not available");
//       } else {
//         resolve("Username available");
//       }
//     });
//   }
  
// username("Daisy")
//     .then((value) => {
//       console.log(value);
//     })
//     .catch((error) => {
//       console.log(error);
//     });


// //Promise Example 7 
// function laptopPrice(price){
//     return new Promise((resolve, reject) => {
//         if(price >= 90000){
//             resolve("You can buy mac")
//         }
//         else{
//             reject("You cannout buy mac")
//         }
//     })
// }

// laptopPrice(100000)
//  .then((value) => {
//     console.log(value)
//  })
//  .catch((error) => {
//     console.log(error)
//  });

  



 


