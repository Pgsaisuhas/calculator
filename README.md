This is a simple calculator built with HTML, CSS, and JavaScript.

The `index.html` file contains the HTML for the calculator. The `<form>` element contains the input field for the display value, as well as the buttons for the different operators. The `<script src="calculator.js" async>` tag loads the JavaScript file that contains the logic for the calculator.

The `calculator.js` file contains the JavaScript code for the calculator. The `add()` function adds the given value to the display value. The `clearDisplay()` function clears the display value. The `calculate()` function evaluates the expression in the display value and sets the display value to the result. The `document.addEventListener('keydown', function(event)`) function listens for keystrokes and calls the appropriate function based on the key that was pressed.

The `style.css` file contains the CSS for the calculator. The `.container` class is used to style the container element for the calculator. The `#display` class is used to style the input field for the display value. The `button` class is used to style the buttons for the different operators.