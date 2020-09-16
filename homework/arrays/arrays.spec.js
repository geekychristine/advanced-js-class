import {
  inventorsBirthYear,
  inventorNames,
  inventorsByEldest,
  inventorYearsLived,
  parisianBoulevards,
  peopleSorted
} from "./arrays";

describe("Inventors", () => {
  test("List inventors born in the 1500's", () => {
    expect(inventorsBirthYear()).toEqual([
      { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
      { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 }
    ]);
  });

  test("List of inventors' first and last names", () => {
    expect(inventorNames()).toEqual([
      "Einstein, Albert",
      "Newton, Isaac",
      "Galilei, Galileo",
      "Curie, Marie",
      "Kepler, Johannes",
      "Copernicus, Nicolaus",
      "Planck, Max",
      "Blodgett, Katherine",
      "Lovelace, Ada",
      "Goode, Sarah E.",
      "Meitner, Lise",
      "Hammarström, Hanna"
    ]);
  });

  test("Sort the inventors by birthdate, oldest to youngest", () => {
    expect(inventorsByEldest()).toEqual([
      { first: "Nicolaus", last: "Copernicus", passed: 1543, year: 1473 },
      { first: "Galileo", last: "Galilei", passed: 1642, year: 1564 },
      { first: "Johannes", last: "Kepler", passed: 1630, year: 1571 },
      { first: "Isaac", last: "Newton", passed: 1727, year: 1643 },
      { first: "Ada", last: "Lovelace", passed: 1852, year: 1815 },
      { first: "Hanna", last: "Hammarström", passed: 1909, year: 1829 },
      { first: "Sarah E.", last: "Goode", passed: 1905, year: 1855 },
      { first: "Max", last: "Planck", passed: 1947, year: 1858 },
      { first: "Marie", last: "Curie", passed: 1934, year: 1867 },
      { first: "Lise", last: "Meitner", passed: 1968, year: 1878 },
      { first: "Albert", last: "Einstein", passed: 1955, year: 1879 },
      { first: "Katherine", last: "Blodgett", passed: 1979, year: 1898 }
    ]);
  });

  test("Sorted list of inventors by years lived", () => {
    expect(inventorYearsLived()).toEqual();
  });

  test("List of Boulevards in Paris that contain 'de' anywhere in the name", () => {
    expect(parisianBoulevards("de")).toEqual();
  });

  test("Sort the people alphabetically by last name", () => {
    expect(peopleSorted()).toEqual();
  });
});
