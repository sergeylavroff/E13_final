import './style.css';
import { submitForm, createForm } from './form4mock';

const coll = document.getElementsByClassName('content');
let i;

createForm();

for (i = 0; i < coll.length; i += 1) {
  coll[i].addEventListener('click', function toggleVisible() {
    this.classList.toggle('active');
    const content = this.nextElementSibling;
    if (content.style.display === 'block') {
      content.style.display = 'none';
    } else {
      content.style.display = 'block';
    }
  });
}

document
  .getElementById('submitFormButton')
  .addEventListener('click', submitForm, false);
