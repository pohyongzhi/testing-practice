import {
    capitalize,
    reverseString,
    Calculator,
    caesarCipher,
    analyzeArray,
} from "./main.mjs";

test("capitalize", () => {
    expect(capitalize("hi")).toMatch("Hi");
});

test("reverse string", () => {
    expect(reverseString("hi")).toMatch("ih");
    expect(reverseString("cat")).toMatch("tac");
    expect(reverseString("what's up")).toMatch("pu s'tahw");
});

const calculator = new Calculator();

test("calculator", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.subtract(2, 1)).toBe(1);
    expect(calculator.subtract(1, 2)).toBe(-1);
    expect(calculator.divide(4, 2)).toBe(2);
    expect(calculator.multiply(1, 2)).toBe(2);
});

test("caesar cipher", () => {
    expect(caesarCipher("xyx", 3)).toMatch("aba");
    expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
    expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

test("analyze array", () => {
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).average).toBe(4);
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).min).toBe(1);
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).max).toBe(8);
    expect(analyzeArray([1, 8, 3, 4, 2, 6]).length).toBe(6);
});
