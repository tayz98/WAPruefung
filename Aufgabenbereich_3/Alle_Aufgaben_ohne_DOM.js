// Aufgabe 3.1
function isDivider(a, b) {
  return !(a % b);
}

console.log(isDivider(8, 3)); // -> false

// Aufgabe 3.2 
function sumofDividers(a) {
  let sum = 0;
  for (var i = 1; i < a; i++) {
    if (!(a % i)) {
      sum += i;
    }
  }
  return sum;
}

console.log(sumofDividers(8)); // -> 7

// Aufgabe 3.3
function isPerfectNumber(a) {
  return sumofDividers(a) == a;
}

console.log(isPerfectNumber(6)); // true

// Aufgabe 3.4
function findPerfectNumbers(n) {
  let arr_perfNum = [];
  for (let i = 1; i < n; i++) {
    if (isPerfectNumber(i)) {
      arr_perfNum.push(i);
    } else {
      continue;
    }
  }
  return arr_perfNum;
}

console.log(findPerfectNumbers(70));

// Aufgabe 3.7
const objects = [
  { city: "Kiel", state: "SH", inhabitants: 247000 },
  { city: "Köln", state: "NRW", inhabitants: 1083000 },
  { city: "Flensburg", state: "SH", inhabitants: 89000 },
  { city: "Heide", state: "SH", inhabitants: 21000 },
];

function inhabitantsOfState(objects, state) {
  return objects
    .filter((o) => o.state == state) // filtert
    .map((o) => o.inhabitants) // konvertiert in ein Array
    .reduce((a, b) => a + b); // addiert die Werte im Array
}

console.log(inhabitantsOfState(objects, "SH"));
