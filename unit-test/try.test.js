import {sum} from "../src/index.js";

test("test sum function", () => {
  expect(sum(10, 20)).toBe(30);
});
