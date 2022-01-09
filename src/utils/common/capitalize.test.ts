import { capitalize } from "./capitalize";

describe("utils/common/capitalize", () => {
  it("should return capitialized string", () => {
    const result = capitalize("string");

    expect(result).toBe("String");
  });
});
