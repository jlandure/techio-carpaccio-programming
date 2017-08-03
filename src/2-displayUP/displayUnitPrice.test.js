const program = require("./displayUnitPrice.js");
let outputData;
beforeEach(() => {
  outputData = "";
});
const storeLog = inputs => (outputData += inputs);
test("console log Unit Price at 2", () => {
  console["log"] = jest.fn(storeLog);
  program(10, 2, "CA");
  expect(console.log).toBeCalled();
  expect(Number(outputData)).toBe(2);
});
test("console log Unit Price at 50", () => {
  console["log"] = jest.fn(storeLog);
  program(6, 50, "UT");
  expect(console.log).toBeCalled();
  expect(Number(outputData)).toBe(50);
});
test("console log Unit Price at 2543", () => {
  console["log"] = jest.fn(storeLog);
  program(1, 2543, "TX");
  expect(console.log).toBeCalled();
  expect(Number(outputData)).toBe(2543);
});
