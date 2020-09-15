import {
  inventors,
  people,
  data,
  inventorsBirthYear,
  inventorNames,
  inventorBirthYears,
  inventorTotalYears,
  inventorYearsLived,
  parisianBoulevards,
  peopleSorted,
  dataInstances
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
    expect(inventorBirthYears()).toEqual();
  });

  test("inventorTotalYears", () => {
    expect(inventorTotalYears()).toEqual();
  });

  test("inventorYearsLived", () => {
    expect(inventorYearsLived()).toEqual();
  });

  test("parisianBoulevards", () => {
    expect(parisianBoulevards()).toEqual();
  });

  test("peopleSorted", () => {
    expect(peopleSorted()).toEqual();
  });

  test("Sum of the instances of each item in array", () => {
    expect(dataInstances()).toEqual();
  });
});
