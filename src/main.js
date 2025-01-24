import 'materialize-css/dist/js/materialize.min.js';

// Get references to the input elements
const decimalInput = document.getElementById("dec-number");
const binaryInput = document.getElementById("bin-number");
const hexadecimalInput = document.getElementById("hexa-number");

// Add event listeners to handle input changes
decimalInput.addEventListener("input", function() {
    convertDecimalToBinary(decimalInput.value);
    convertDecimalToHexadecimal(decimalInput.value);
});

binaryInput.addEventListener("input", function() {
    convertBinaryToDecimal(binaryInput.value);
    convertBinaryToHexadecimal(binaryInput.value);
});

hexadecimalInput.addEventListener("input", function() {
    convertHexadecimalToDecimal(hexadecimalInput.value);
    convertHexadecimalToBinary(hexadecimalInput.value);
});

// Convert a decimal number to binary and update the binary input
function convertDecimalToBinary(num) {
    const result = parseInt(num, 10);
    binaryInput.value = isNaN(result) ? '' : result.toString(2);
}

// Convert a decimal number to hexadecimal and update the hexadecimal input
function convertDecimalToHexadecimal(num) {
    const result = parseInt(num, 10);
    hexadecimalInput.value = isNaN(result) ? '' : '0x' + result.toString(16).toUpperCase();
}

// Convert a binary number to decimal and update the decimal input
function convertBinaryToDecimal(num) {
    const result = parseInt(num, 2);
    decimalInput.value = isNaN(result) ? '' : result;
}

// Convert a binary number to hexadecimal and update the hexadecimal input
function convertBinaryToHexadecimal(num) {
    const result = parseInt(num, 2);
    hexadecimalInput.value = isNaN(result) ? '' : '0x' + result.toString(16).toUpperCase();
}

// Convert a hexadecimal number to decimal and update the decimal input
function convertHexadecimalToDecimal(num) {
    const result = parseInt(num, 16);
    decimalInput.value = isNaN(result) ? '' : result;
}

// Convert a hexadecimal number to binary and update the binary input
function convertHexadecimalToBinary(num) {
    const result = parseInt(num, 16);
    binaryInput.value = isNaN(result) ? '' : result.toString(2);
}