"use strict";
/*const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
// Switching with an auxiliary variable
// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);
[main, secondary] = [secondary, main];
console.log(main, secondary);
//Recieve return values from a function  :)
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);
///Nested
const nested = [2, 4, [5, 6]];
const [i, , [j, k]] = nested;
console.log(i, j, k);
///Default
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r); */
/*
console.log(restaurantName, hours, tags);
///Default
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating variables
let a = 11;
let b = 99;
const obj = { a: 23, b: 7, c: 14 };
({ a, b } = obj);
console.log(a, b);
///Nested objects
const {
  fri: { open: o, close: c },
} = openingHours;
console.log(o, c);
*/
// Data needed for a later exercise
const flights =
  "_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30";

// Data needed for first part of the section
const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze, Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad"],
  mainMenu: ["Pizza", "Pasta", "Risotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: { open: 11, close: 23 },
    sat: {
      open: 0,
      close: 24,
    },
  },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = "20:00",
    adress,
  }) {
    console.log(
      `Order recieved: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here's some pasta with ${ing1}, ${ing2}, ${ing3}`);
  },
};
// restaurant.orderDelivery({
//   time: "22:30",
//   adress: "Via del Sole, 21",
//   mainIndex: 2,
//   starterIndex: 2,
// });
// restaurant.orderDelivery({ adress: "Via del Sole, 21", starterIndex: 1 });
// const { name, openingHours, categories } = restaurant;
// const {
//   name: restaurantName,
//   openingHours: hours,
//   categories: tags,
// } = restaurant;
// const arr = [7, 8, 9];
// const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
// console.log(badNewArr);

// const newArr = [1, 2, ...arr];
// console.log(newArr);
// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, "Gnocci"];
// console.log(newMenu);
// ///Copy array
// const mainMenuCopy = [...restaurant.mainMenu];
// console.log(mainMenuCopy);
// ///Join 2 arrays
// const menu = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(menu);
// ///Iterables are arrays, strings, maps and sets !objects

// const str = "Jonas";
// const letters = [...str, "S."];
// console.log(letters);
// console.log(...str);
// const ingredients = [
//   prompt("Let's make pasta! Number 1:"),
//   prompt("Number 2:"),
//   prompt("Number 3:"),
// ];
// console.log(ingredients);
// restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// restaurant.orderPasta(...ingredients);
///Objects
// const newRestaurant = { foundingYear: 1998, ...restaurant, founder: "Jaxtin" };
// console.log(newRestaurant);
// newRestaurant.mainMenu = ["New Shit"];
// console.log(restaurant.mainMenu);
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = "Ristorante Roma";
// console.log(restaurantCopy.name);
// console.log(restaurant.name);
//////////////////////////////////////////////
let colors = [
  "darkblue",
  "darkcyan",
  "darkgoldenrod",
  "darkgray",
  "darkgreen",
  "darkgrey",
  "darkkhaki",
  "darkmagenta",
  "darkolivegreen",
  "darkorange",
  "darkorchid",
  "darkred",
  "darksalmon",
  "darkseagreen",
  "darkslateblue",
  "darkslategray",
  "darkslategrey",
  "darkturquoise",
  "darkviolet",
  "deeppink",
  "deepskyblue",
  "dimgray",
  "dimgrey",
  "dodgerblue",
  "firebrick",
  "floralwhite",
  "forestgreen",
  "gainsboro",
  "ghostwhite",
  "gold",
  "goldenrod",
  "greenyellow",
  "grey",
  "honeydew",
  "hotpink",
  "indianred",
  "indigo",
  "ivory",
  "khaki",
  "lavender",
  "lavenderblush",
  "lawngreen",
  "lemonchiffon",
  "lightblue",
  "lightcoral",
  "lightcyan",
];
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
function setCharAt(str, index, chr) {
  if (index > str.length - 1) return str;
  return str.substring(0, index) + chr + str.substring(index + 1);
}
let isUpper = (char) => {
  if (char >= 97 && char <= 97 + 32) return 0;
  if (char >= 65 && char <= 65 + 32) return 1;
  return 2;
};
let userText = prompt(`Input your text here and watch magic happen!`);
let perm = document.querySelector("#permutation");
let pace = prompt(
  `What pace do you want for your text(miliseconds)? ${userText.length} characters.`
);
perm.textContent = userText;
console.log(perm.textContent);
let randomColorIndex;
let maximumColorIndex = colors.length - 1;
perm.addEventListener("mouseover", async function () {
  let cnt = 0;
  let aux = perm.textContent.split("");
  while (cnt < perm.textContent.length) {
    randomColorIndex = Math.floor(Math.random() * maximumColorIndex);
    perm.style.color = colors[randomColorIndex];
    let currentChar = aux[cnt].charCodeAt(0);
    if (
      (currentChar >= 65 && currentChar <= 65 + 32) ||
      (currentChar >= 97 && currentChar <= 122)
    ) {
      if (isUpper(currentChar)) {
        while (currentChar < "X".charCodeAt(0)) {
          currentChar++;
          aux[cnt] = String.fromCharCode(currentChar);
          perm.textContent = setCharAt(perm.textContent, cnt, aux[cnt]);
          await sleep(pace);
        }
      } else {
        while (currentChar < "x".charCodeAt(0)) {
          currentChar++;
          aux[cnt] = String.fromCharCode(currentChar);
          perm.textContent = setCharAt(perm.textContent, cnt, aux[cnt]);
          await sleep(pace);
        }
      }
      if (currentChar > "x".charCodeAt(0)) {
        while (currentChar > "x".charCodeAt(0)) {
          currentChar--;
          aux[cnt] = String.fromCharCode(currentChar);
          perm.textContent = setCharAt(perm.textContent, cnt, aux[cnt]);
          await sleep(pace);
        }
      } else if (isUpper(currentChar) && currentChar > "X".charCodeAt(0)) {
        while (currentChar > "X".charCodeAt(0)) {
          currentChar--;
          aux[cnt] = String.fromCharCode(currentChar);
          perm.textContent = setCharAt(perm.textContent, cnt, aux[cnt]);
          await sleep(pace);
        }
      }
      cnt++;
      await sleep(pace);
    } else cnt++;
  }
});
console.log("Y".charCodeAt(0));
