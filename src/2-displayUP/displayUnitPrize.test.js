let outputData;

beforeEach(() => {
  outputData = "";
});

const storeLog = inputs => (outputData += inputs);
test("console log Unit Prize", () => {
  console["log"] = jest.fn(storeLog);
  require("./displayUnitPrize.js");
  expect(console.log).toBeCalled();
  expect(outputData).toBe("12");
});
