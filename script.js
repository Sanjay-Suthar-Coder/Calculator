let buttons = document.querySelectorAll('button');
let input = document.querySelector('input');
let expression = '';

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;

    if (value === 'C') {
      expression = '';
      input.value = '';
    } else if (value === '=') {
      try {
        // Replace 'x' with '*' for multiplication
        expression = expression.replace(/x/g, '*');
        input.value = eval(expression);
        expression = input.value;  // So that next operations continue
      } catch {
        input.value = 'Error';
        expression = '';
      }
    } else {
      expression += value;
      input.value = expression;
    }
  });
});
