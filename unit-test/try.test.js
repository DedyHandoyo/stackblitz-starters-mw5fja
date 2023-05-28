import {sum, Example} from "../src/index.js";

test("test sum function", () => {
  expect(sum(10, 20)).toBe(30);
});

test("Test Example class", () => {
  const example = new Example("Dedy", true);

  expect(example.name).toBe("Dedy");
});