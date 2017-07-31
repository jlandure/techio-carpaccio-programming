let outputData = "";
storeLog = inputs => (outputData += inputs);
test("console log Hello World", () => {
  console["log"] = jest.fn(storeLog);
  require("./hello.js");
  expect(console.log).toBeCalled()
  expect(outputData).toBe("Hello World");
});
