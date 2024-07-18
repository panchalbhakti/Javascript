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


