console.log("#1");

let franch = "bonjour";
const lesChampsElysses = (helloWord) => {
  if (helloWord === franch) {
    console.log("Salem");
  } else {
    console.log("Soubol");
  }
};

lesChampsElysses("hi");
////////////////////////////////////////////

console.log("#2");

const kids = ["Keira", "Alan", "Marina"];
const lunchBox = (meal) => {
  for (let i = 0; i < kids.length; i++) {
    if (i <= meal) {
      console.log("Eat your home made lunch");
    } else {
      console.log("You can buy luch at school");
    }
  }
};
lunchBox(5);

////////////////////////////////////
console.log("#3");

const helloWorld = () => {
  console.log("Hello World!");
};

helloWorld();

////////////////////////////
console.log("#4");

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const whatToDo = (day) => {
  for (let i = 0; i < days.length; i++) {
    if (days[i] === "Saturday" && "Sunday") {
      console.log("Just sleep!");
    } else {
      console.log("Good morning! You have class today");
    }
  }
};
whatToDo("Friday");

//////////////////////////////////////////////////

console.log("#5");

let shoppingList = ["milk", "chocolate"];
const addFood = (food) => {
  shoppingList.push(food);
  console.log(shoppingList);
};
addFood("apple");
