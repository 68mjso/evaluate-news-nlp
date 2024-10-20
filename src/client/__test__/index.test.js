/**
 * @jest-environment jsdom
 */
const { handleSubmit } = require("../js/formHandler");
describe("Main JS file", () => {
  it("should import handleSubmit function", () => {
    expect(handleSubmit).toBeDefined();
  });
});
