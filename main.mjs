export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverseString(str) {
    let result = "";

    for (let i = str.length - 1; i >= 0; i--) {
        result += str.charAt(i);
    }

    return result;
}

export class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    divide(a, b) {
        return a / b;
    }

    multiply(a, b) {
        return a * b;
    }
}

export function caesarCipher(str, shift) {
    function isCharacterALetter(char) {
        return /[a-zA-Z]/.test(char);
    }

    let result = "";

    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        if (isCharacterALetter(char)) {
            let ascii = str.charCodeAt(i);
            const base = ascii > 97 ? 97 : 65;

            result += String.fromCharCode(base + ((ascii - base + shift) % 26));
        } else {
            result += char;
        }
    }

    return result;
}

export function analyzeArray(arr) {
    console.log(arr.length);
    return {
        average: arr.reduce((a, b) => a + b) / arr.length,
        min: arr.sort().shift(),
        max: arr.sort()[arr.length - 1],
        length: arr.length + 1,
    };
}
