// Get all the buttons and result input field
const buttons = document.querySelectorAll('input[type="button"]');
const result = document.getElementById('result');

// Variable to keep the current input
let currentInput = '';

// Add event listeners to each button
buttons.forEach(button => {
    button.addEventListener('click', () => {
        const value = button.value;

        if (value === 'c') {
            // Clear the input field
            currentInput = '';
            result.value = '';
        } else if (value === '=') {
            try {
                // Evaluate the expression
                currentInput = eval(currentInput);
                result.value = currentInput;
            } catch (e) {
                result.value = 'Error';
                currentInput = '';
            }
        } else {
            // Append the clicked button value to the input field
            currentInput += value;
            result.value = currentInput;
        }
    });
});
