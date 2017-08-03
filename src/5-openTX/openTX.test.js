const program = require("./openTX.js");
let outputData;
beforeEach(() => {
  outputData = "";
});
const storeLog = inputs => (outputData += inputs);
const getTax = state => {
  switch (state) {
    //case "UT": return 1.03;
    //case "NV": return 1.05;
    case "TX":
      return 1.07;
    //case "AL": return 1.10;
    case "CA":
      return 1.15;
    default:
      return 1;
  }
};
test("test1 in CA", () => {
  console.log(getTax("AL"));
  console["log"] = jest.fn(storeLog);
  const nbItems = 10,
    price = 2,
    state = "CA";
  program(nbItems, price, state);
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * getTax(state);
  expect(Number(outputData)).toBe(expectedPrice);
});
test("test2 in CA", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 6,
    price = 50,
    state = "CA";
  program(nbItems, price, state);
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * getTax(state);
  expect(Number(outputData)).toBe(expectedPrice);
});
test("test3 in CA", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 1,
    price = 2543,
    state = "CA";
  program(nbItems, price, state);
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * getTax(state);
  expect(Number(outputData)).toBe(expectedPrice);
});
test("test1 in UT", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 6,
    price = 50,
    state = "UT";
  program(nbItems, price, state);
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * getTax(state);
  expect(Number(outputData)).toBe(expectedPrice);
});
test("test2 in UT", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 75,
    price = 3.5,
    state = "UT";
  program(nbItems, price, state);
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * getTax(state);
  expect(Number(outputData)).toBe(expectedPrice);
});
test("test3 in UT", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 30,
    price = 7,
    state = "UT";
  program(nbItems, price, state);
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * getTax(state);
  expect(Number(outputData)).toBe(expectedPrice);
});
test("test1 in TX", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 14,
    price = 50,
    state = "TX";
  program(nbItems, price, state);
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * getTax(state);
  expect(Number(outputData)).toBe(expectedPrice);
});
test("test2 in TX", () => {
  console["log"] = jest.fn(storeLog);
  const nbItems = 14,
    price = 1.45,
    state = "TX";
  program(nbItems, price, state);
  expect(console.log).toBeCalled();
  const expectedPrice = nbItems * price * getTax(state);
  expect(Number(outputData)).toBe(expectedPrice);
});
