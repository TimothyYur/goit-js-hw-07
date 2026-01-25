const input = document.getElementById('name-input');
const output = document.getElementById('name-output');
input.addEventListener('input', () => {
    const value = input.value;
    output.textContent = value.trim() === '' ? 'Anonymous' : value;
});