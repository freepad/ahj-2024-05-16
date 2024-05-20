import demo, { calc, foo } from "./app";

jest.mock("./user.js", () => {
  return {
    __esModule: true,
    default: () => "test",
  };
});

describe("Пример теста", () => {
  test.each([
    { str: "Hello!", expected: "Demo: Hello!" },
    { str: "", expected: "Demo: " },
    { str: 100, expected: "Demo: 100" },
  ])("demo($str)", ({ str, expected }) => {
    expect(demo(str)).toBe(expected);
  });

  it("test mock", () => {
    const fn = jest.fn();
    const calcMock = { log: fn };
    const result = calc(1, 2, calcMock);
    expect(result).toBe(3);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it("test mock module", () => {
    const result = foo("test");

    expect(result).toBe("test");
  });
});
