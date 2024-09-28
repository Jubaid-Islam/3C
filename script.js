document.addEventListener("DOMContentLoaded", function() {
    const decimalInput = document.getElementById("decimal");
    const binaryInput = document.getElementById("binary");
    const octalInput = document.getElementById("octal");
    const hexadecimalInput = document.getElementById("hexadecimal");
    const clearButton = document.getElementById("clear");
    const modal = document.getElementById("modal");
    const explanationText = document.getElementById("explanation-text");

    // Convert decimal to other number systems
    decimalInput.addEventListener("input", function() {
        const decimalValue = parseInt(decimalInput.value);
        if (!isNaN(decimalValue)) {
            binaryInput.value = decimalValue.toString(2);
            octalInput.value = decimalValue.toString(8);
            hexadecimalInput.value = decimalValue.toString(16).toUpperCase();
        } else {
            clearFields();
        }
    });

    // Convert binary to other number systems
    binaryInput.addEventListener("input", function() {
        const binaryValue = parseInt(binaryInput.value, 2);
        if (!isNaN(binaryValue)) {
            decimalInput.value = binaryValue.toString(10);
            octalInput.value = binaryValue.toString(8);
            hexadecimalInput.value = binaryValue.toString(16).toUpperCase();
        } else {
            clearFields();
        }
    });

    // Convert octal to other number systems
    octalInput.addEventListener("input", function() {
        const octalValue = parseInt(octalInput.value, 8);
        if (!isNaN(octalValue)) {
            decimalInput.value = octalValue.toString(10);
            binaryInput.value = octalValue.toString(2);
            hexadecimalInput.value = octalValue.toString(16).toUpperCase();
        } else {
            clearFields();
        }
    });

    // Convert hexadecimal to other number systems
    hexadecimalInput.addEventListener("input", function() {
        const hexValue = parseInt(hexadecimalInput.value, 16);
        if (!isNaN(hexValue)) {
            decimalInput.value = hexValue.toString(10);
            binaryInput.value = hexValue.toString(2);
            octalInput.value = hexValue.toString(8);
        } else {
            clearFields();
        }
    });

    // Clear all input fields
    clearButton.addEventListener("click", clearFields);

    function clearFields() {
        decimalInput.value = '';
        binaryInput.value = '';
        octalInput.value = '';
        hexadecimalInput.value = '';
    }

    // Show explanation for conversions
    window.showExplanation = function(system) {
        let explanation = '';
        switch(system) {
            case 'decimal':
                explanation = `
                <strong>Decimal to Binary:</strong> Divide the decimal number by 2 repeatedly, recording the remainders. The binary number is the remainders read in reverse order.<br>
                <strong>Decimal to Octal:</strong> Divide the decimal number by 8 repeatedly, recording the remainders. The octal number is the remainders read in reverse order.<br>
                <strong>Decimal to Hexadecimal:</strong> Divide the decimal number by 16 repeatedly, recording the remainders. Use hexadecimal digits (0-9 and A-F) for remainders greater than 9.
                `;
                break;
            case 'binary':
                explanation = `
                <strong>Binary to Decimal:</strong> Multiply each binary digit by powers of 2, starting from the right (0th power) to left, then sum them up.<br>
                <strong>Binary to Octal:</strong> Group the binary digits in sets of 3 from right to left, and convert each group to its octal equivalent.<br>
                <strong>Binary to Hexadecimal:</strong> Group the binary digits in sets of 4 from right to left, and convert each group to its hexadecimal equivalent.
                `;
                break;
            case 'octal':
                explanation = `
                <strong>Octal to Binary:</strong> Convert each octal digit to its 3-bit binary equivalent.<br>
                <strong>Octal to Decimal:</strong> Multiply each octal digit by powers of 8, starting from the right (0th power) to left, then sum them up.<br>
                <strong>Octal to Hexadecimal:</strong> First convert octal to binary, then group the binary digits in sets of 4, and convert them to hexadecimal.
                `;
                break;
            case 'hexadecimal':
                explanation = `
                <strong>Hexadecimal to Binary:</strong> Convert each hexadecimal digit to its 4-bit binary equivalent.<br>
                <strong>Hexadecimal to Decimal:</strong> Multiply each hexadecimal digit by powers of 16, starting from the right (0th power) to left, then sum them up.<br>
                <strong>Hexadecimal to Octal:</strong> First convert hexadecimal to binary, then group the binary digits in sets of 3, and convert them to octal.
                `;
                break;
        }
        explanationText.innerHTML = explanation;
        modal.style.display = 'flex';
    }

    // Hide modal
    window.hideModal = function() {
        modal.style.display = 'none';
    }
});
