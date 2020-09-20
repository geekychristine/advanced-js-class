// Just some dummy data to work with.
export const inventors = [
  { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
  { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
  { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
  { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
  { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
  { first: "Nicolaus", last: "Copernicus", year: 1473, passed: 1543 },
  { first: "Max", last: "Planck", year: 1858, passed: 1947 },
  { first: "Katherine", last: "Blodgett", year: 1898, passed: 1979 },
  { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
  { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
  { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
  { first: "Hanna", last: "Hammarström", year: 1829, passed: 1909 }
];

export const people = [
  "Beck, Glenn",
  "Becker, Carl",
  "Beckett, Samuel",
  "Beddoes, Mick",
  "Beecher, Henry",
  "Beethoven, Ludwig",
  "Begin, Menachem",
  "Belloc, Hilaire",
  "Bellow, Saul",
  "Benchley, Robert",
  "Benenson, Peter",
  "Ben-Gurion, David",
  "Benjamin, Walter",
  "Benn, Tony",
  "Bennington, Chester",
  "Benson, Leana",
  "Bent, Silas",
  "Bentsen, Lloyd",
  "Berger, Ric",
  "Bergman, Ingmar",
  "Berio, Luciano",
  "Berle, Milton",
  "Berlin, Irving",
  "Berne, Eric",
  "Bernhard, Sandra",
  "Berra, Yogi",
  "Berry, Halle",
  "Berry, Wendell",
  "Bethea, Erin",
  "Bevan, Aneurin",
  "Bevel, Ken",
  "Biden, Joseph",
  "Bierce, Ambrose",
  "Biko, Steve",
  "Billings, Josh",
  "Biondo, Frank",
  "Birrell, Augustine",
  "Black, Elk",
  "Blair, Robert",
  "Blair, Tony",
  "Blake, William"
];

// Array.prototype.filter()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
// 1. Filter the list of inventors for those who were born in the 1500's
export const inventorsBirthYear = () => {

const filteredArray = inventors.filter(inventor => inventor.year < 1600);

console.log(filteredArray);
};


// Array.prototype.map()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
// 2. Give us an array of the inventors first and last names, e.g: "Curie, Marie"
export const inventorNames = () => {

const nameCalling = inventors.map(inventors => {
  return inventors.last + ","+ inventors.first;
})

console.log(nameCalling);
};

// Array.prototype.sort()
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
// 3. Sort the inventors by birth date, oldest to youngest
export const inventorsByEldest = () => {
    
const oldFarts =
  inventors.sort(function(a, b){return a.year - b.year})

console.log(oldFarts);
};


// 4. Sort the inventors by years lived
// (Hint: calculate their ages in the sort() comparison function. Check out sort() on MDN for examples.)
export const inventorYearsLived = () => {


};

// 5. sort Exercise
// Sort the people alphabetically by last name
export const peopleSorted = () => {
const nameSake= inventors.sort(function(a, b){
    if(a.last < b.last) { return -1; }
    if(a.last > b.last) { return 1; }
return 0;
})
console.log(nameSake);

};