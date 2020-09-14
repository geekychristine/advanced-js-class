import { getDoggo } from "./error-handling";

describe("Get Doggo", () => {
  test("Return a string", () => {
    expect(getDoggo("corgi")).toEqual("corgi");
  });

  test("Should throw an error if parameter is undefined", () => {
    expect(() => getDoggo()).toThrow();
  });

  test("Should throw an error if parameter is not a string", () => {
    expect(() => getDoggo(2)).toThrow();
  });
});
