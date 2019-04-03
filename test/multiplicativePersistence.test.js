const multiplicativePersistence = require("../dist/multiplicativePersistence");

describe("Multiplicative persistence", () => {
  test("Returns 0 for numbers less that 10", () => {
    const received = multiplicativePersistence(5);
    const expected = 0;
    expect(received).toBe(expected);
  });

  test("Returns 1 for 10", () => {
    const received = multiplicativePersistence(10);
    const expected = 1;
    expect(received).toBe(expected);
  });

  test("Returns 2 for 25", () => {
    const received = multiplicativePersistence(25);
    const expected = 2;
    expect(received).toBe(expected);
  });

  test("Returns 3 for 39", () => {
    const received = multiplicativePersistence(39);
    const expected = 3;
    expect(received).toBe(expected);
  });

  test("Returns 4 for 77", () => {
    const received = multiplicativePersistence(77);
    const expected = 4;
    expect(received).toBe(expected);
  });

  test("Returns 5 for 679", () => {
    const received = multiplicativePersistence(679);
    const expected = 5;
    expect(received).toBe(expected);
  });

  test("Returns 6 for 6788", () => {
    const received = multiplicativePersistence(6788);
    const expected = 6;
    expect(received).toBe(expected);
  });

  test("Returns 7 for 68889", () => {
    const received = multiplicativePersistence(68889);
    const expected = 7;
    expect(received).toBe(expected);
  });

  test("Returns 8 for 2677889", () => {
    const received = multiplicativePersistence(2677889);
    const expected = 8;
    expect(received).toBe(expected);
  });

  test("Returns 9 for 26888999", () => {
    const received = multiplicativePersistence(26888999);
    const expected = 9;
    expect(received).toBe(expected);
  });

  test("Returns 10 for 3778888999", () => {
    const received = multiplicativePersistence(3778888999);
    const expected = 10;
    expect(received).toBe(expected);
  });

  test("Returns 11 for 277777788888899", () => {
    const received = multiplicativePersistence(277777788888899);
    const expected = 11;
    expect(received).toBe(expected);
  });

  test("Returns 11 for -277777788888899", () => {
    const received = multiplicativePersistence(-277777788888899);
    const expected = 11;
    expect(received).toBe(expected);
  });

  test("Returns an error for fractions", () => {
    const received = () => multiplicativePersistence(0.1);
    const expected = new Error("Number is not an integer");
    expect(received).toThrowError(expected);
  });
});
