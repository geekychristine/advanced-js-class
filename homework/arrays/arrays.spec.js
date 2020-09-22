import {
  inventorsBirthYear,
  inventorNames,
  inventorsByEldest,
  inventorYearsLived,
  peopleSorted,
} from "./arrays";

describe("Inventors", () => {
  test("List inventors born in the 1500's", () => {
    expect(inventorsBirthYear()).toEqual([
      { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
      { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
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
      "Hammarström, Hanna",
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
      { first: "Katherine", last: "Blodgett", passed: 1979, year: 1898 },
    ]);
  });

  test("Sorted list of inventors by years lived", () => {
    expect(inventorYearsLived()).toEqual([
      { first: "Ada", last: "Lovelace", year: 1815, passed: 1852 },
      { first: "Sarah E.", last: "Goode", year: 1855, passed: 1905 },
      { first: "Johannes", last: "Kepler", year: 1571, passed: 1630 },
      { first: "Marie", last: "Curie", year: 1867, passed: 1934 },
      {
        first: "Nicolaus",
        last: "Copernicus",
        year: 1473,
        passed: 1543,
      },
      { first: "Albert", last: "Einstein", year: 1879, passed: 1955 },
      { first: "Galileo", last: "Galilei", year: 1564, passed: 1642 },
      {
        first: "Hanna",
        last: "Hammarström",
        year: 1829,
        passed: 1909,
      },
      {
        first: "Katherine",
        last: "Blodgett",
        year: 1898,
        passed: 1979,
      },
      { first: "Isaac", last: "Newton", year: 1643, passed: 1727 },
      { first: "Max", last: "Planck", year: 1858, passed: 1947 },
      { first: "Lise", last: "Meitner", year: 1878, passed: 1968 },
    ]);
  });

  test("Sort the people alphabetically by last name", () => {
    expect(peopleSorted()).toEqual([
      "Beck, Glenn",
      "Becker, Carl",
      "Beckett, Samuel",
      "Beddoes, Mick",
      "Beecher, Henry",
      "Beethoven, Ludwig",
      "Begin, Menachem",
      "Belloc, Hilaire",
      "Bellow, Saul",
      "Ben-Gurion, David",
      "Benchley, Robert",
      "Benenson, Peter",
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
      "Blake, William",
    ]);
  });
});
