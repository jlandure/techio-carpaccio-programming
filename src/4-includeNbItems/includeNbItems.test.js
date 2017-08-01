const program = require("./includeNbItems.js");
let outputData;
beforeEach(() => {
  outputData = "";
});
const storeLog = inputs => (outputData += inputs);
test("test1 in CA", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 10,
    price = 2;
  program(nbItems, price, "CA");
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * 1.15;
  expect(outputData).toBe(expectedPrice.toString());
});
test("test2 in CA", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 6,
    price = 50;
  program(nbItems, price, "CA");
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * 1.15;
  expect(outputData).toBe(expectedPrice.toString());
});
test("test3 in CA", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 1,
    price = 2543;
  program(nbItems, 2543, "CA");
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * 1.15;
  expect(outputData).toBe(expectedPrice.toString());
});
test("test1 in UT", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 6,
    price = 50;
  program(nbItems, price, "UT");
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price;
  expect(outputData).toBe(expectedPrice.toString());
});
test("test1 in TX", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 14,
    price = 50;
  program(nbItems, price, "TX");
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price;
  expect(outputData).toBe(expectedPrice.toString());
});
