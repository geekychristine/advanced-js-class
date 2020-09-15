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
  dataInstances,
} from "./arrays";

describe("Inventors", () => {
  test("List inventors born in the 1500's", () => {
    expect(inventorsBirthYear()).toEqual([
      { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
      { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
    ]);
  });
});
