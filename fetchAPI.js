//Ex:1
const URL = "https://dummyjson.com/users/1";

async function fetchData() {
      const response = await fetch(URL);
      const json = await response.json();
      console.log(json);
      console.log(json.id);
      console.log(json.firstName);
      console.log(json.lastName);
    }
  
fetchData();


//Ex:2
const URL2 = "https://jsonplaceholder.typicode.com/todos/1";

fetch(URL2)
  .then(response => {
    return response.json();
  })
  .then(json => console.log(json));

//Ex:3
const URL3 = "https://cat-fact.herokuapp.com/facts";

const factPara = document.querySelector("#fact");
const btn = document.querySelector("#btn");

const getFacts = async () => {
  let response = await fetch(URL3);  
  let json = await response.json();
  console.log(json);
  factPara.innerText = json[1].text;
}

btn.addEventListener("click", getFacts);


//Ex:4
const URL4 = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";

async function url4 () {
  const response = await fetch(URL4);
  const json = await response.json();
  console.log(json);
  console.log(json.deck_id);
  console.log(json.remaining + " cards in a deck");
}

url4();

  
//Ex:5
const URL5 = "https://api.magicthegathering.io/v1/cards";

fetch(URL5)
  .then(response => {
    return response.json();
  })
  .then(json => console.log(json));


//Ex:6
const URL6 = "http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline";

const factPara2 = document.querySelector("#makeup");
const btn2 = document.querySelector("#makeup-fact");

const fact = async () => {
  let response2 = await fetch(URL6);  
  let json2 = await response2.json();
  console.log(json2);
}

makeup.addEventListener("click", fact);