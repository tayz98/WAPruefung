// Aufgabe 3.1
function isDivider(a, b) {
  if (a % b == 0) {
    return true;
  } else {
    return false;
  }
}

// Aufgabe 3.2
function sumofDividers(a) {
  let result = 0;
  let newArr = [0];
  for (let i = 1; i < a; i++) {
    newArr.push(i);
    if (a % newArr[i] == 0) {
      result = result + newArr[i];
    } else {
      continue;
    }
  }
  return result;
}

// Aufgabe 3.3
function isPerfectNumber(a) {
  if (sumofDividers(a) == a) {
    return true;
  } else {
    return false;
  }
}

// Aufgabe 3.4
function findPerfectNumbers(n) {
  let arr12 = [];
  let result = 0;
  for (let i = 1; i < n; i++) {
    if (isPerfectNumber(i)) {
      arr12.push(i);
    } else {
      continue;
    }
  }
  return arr12;
}

// Aufgabe 3.7
const objects = [
  { city: "Kiel", state: "SH", inhabitants: 247000 },
  { city: "Köln", state: "NRW", inhabitants: 1083000 },
  { city: "Flensburg", state: "SH", inhabitants: 89000 },
  { city: "Heide", state: "SH", inhabitants: 21000 },
];
function inhabitantsOfState(objects, state) {
  const stateFilter = objects.filter((o) => o.state == state);
  return stateFilter;
}

console.log(inhabitantsOfState(objects, "SH"));
