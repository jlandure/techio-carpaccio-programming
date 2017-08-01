const program = require("./includeTax.js");
let outputData;
beforeEach(() => {
  outputData = "";
});
const storeLog = inputs => (outputData += inputs);
test("console log Price at 2 in CA", () => {
  console["log"] = jest.fn(storeLog);
  const price = 2
  program(10, price, "CA")
  expect(console.log).toBeCalled();
  const expectedPrice = price * 1.15
  expect(outputData).toBe(expectedPrice.toString());
});
test("console log Price at 50 in CA", () => {
  console["log"] = jest.fn(storeLog);
  const price = 50
  program(6, price, "CA")
  expect(console.log).toBeCalled();
  const expectedPrice = price * 1.15
  expect(outputData).toBe(expectedPrice.toString());
});
test("console log Price at 2543 in CA", () => {
  console["log"] = jest.fn(storeLog);
  const price = 2543
  program(1, 2543, "CA")
  expect(console.log).toBeCalled();
  const expectedPrice = price * 1.15
  expect(outputData).toBe(expectedPrice.toString());
});
test("console log Price at 50 in UT", () => {
  console["log"] = jest.fn(storeLog);
  const price = 50
  program(6, price, "UT")
  expect(console.log).toBeCalled();
  const expectedPrice = price
  expect(outputData).toBe(expectedPrice.toString());
});
test("console log Price at 50 in TX", () => {
  console["log"] = jest.fn(storeLog);
  const price = 50
  program(6, price, "TX")
  expect(console.log).toBeCalled();
  const expectedPrice = price
  expect(outputData).toBe(expectedPrice.toString());
});