import './index.css';
import add from './src/add';

const form = document.querySelector('#string-calculator-form');
const result = document.querySelector('#result');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    result.value = add(new FormData(e.target).get('numberInput'));
});
