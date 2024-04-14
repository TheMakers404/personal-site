const inputField = document.getElementById('input-field');
const output = document.getElementById('output');

inputField.addEventListener('input', () => {
  const inputValue = inputField.value.toLowerCase();
  if (inputValue === 'hello') {
    output.textContent = 'Hi there!';
  } else {
    output.textContent = '';
  }
});
