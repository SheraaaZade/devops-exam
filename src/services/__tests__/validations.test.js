const {
    isEmpty,
    containsSpecialChar, containsNumber
} = require("../validations");
const { isEightChar } = require("../validations");

describe("validations tests suites - isEmpty", () => {
    test("should return true as the label is undefined", () => {
        const result = isEmpty();
        expect(result).toBe(true);
    });

    test("should return true as the label is empty", () => {
        const result = isEmpty("");
        expect(result).toBe(true);
    });

    test("should return false as the label is empty", () => {
        const result = isEmpty("Label");
        expect(result).toBe(false);
    });
});

// TODO: Create tests suite for validation function
describe("validation tests suites - isEightChar", () => {
    test("should return true as the label contains at least 8 chars", () => {
        const result = isEightChar("gamerTag");
        expect(result).toBe(true);
    });

    test("should return false as the label contains less than 8 chars", () => {
        const result = isEightChar("gamerZ");
        expect(result).toBe(false);
    });

    test("should return true as the label contains at least one special char", () => {
        const result = containsSpecialChar("gamer-Tag");
        expect(result).toBe(true);
    });

    test("should return false as the label doesn't contains a special char", () => {
        const result = containsSpecialChar("gamerTag");
        expect(result).toBe(false);
    });

    test("should return true as the label contains a number", () => {
        const result = containsNumber("gamerTag1");
        expect(result).toBe(true);
    });

    test("should return false as the label doesn't contains a number", () => {
        const result = containsNumber("gamerTag");
        expect(result).toBe(false);
    });
});
