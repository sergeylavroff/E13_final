export function createForm() {
  const form = document.createElement('form');
  form.setAttribute('method', 'get');
  form.setAttribute('id', 'form4mockme');

  const name = document.createElement('input');
  name.setAttribute('type', 'text');
  name.setAttribute('name', 'Name');
  name.setAttribute('placeholder', 'Name');

  const email = document.createElement('input');
  email.setAttribute('type', 'text');
  email.setAttribute('name', 'Email');
  email.setAttribute('inputmode', 'email');
  email.setAttribute('placeholder', 'Email');

  const id = document.createElement('input');
  id.setAttribute('type', 'text');
  id.setAttribute('name', 'ID');
  id.setAttribute('placeholder', 'ID');

  const phone = document.createElement('input');
  phone.setAttribute('type', 'text');
  phone.setAttribute('name', 'Phone');
  phone.setAttribute('inputmode', 'tel');
  phone.setAttribute('placeholder', 'Phone');

  const submit = document.createElement('input');
  submit.setAttribute('type', 'submit');
  submit.setAttribute('value', 'Submit');
  submit.setAttribute('id', 'submitFormButton');

  form.appendChild(id);
  form.appendChild(name);
  form.appendChild(email);
  form.appendChild(phone);
  form.appendChild(submit);

  document.getElementsByClassName('contacts')[0].appendChild(form);
}

export function submitForm() {
  const ext = document.getElementById('form4mockme').children;
  const id = ext.ID.value;
  const name = ext.Name.value;
  const email = ext.Email.value;
  const phone = ext.Phone.value;

  const request = `http://127.0.0.1:2525/contacts?${
    id ? `id=${id}` : ''
  }${name ? `name=${name}` : ''
  }${email ? `email=${email}` : ''
  }${phone ? `phone=${phone}` : ''}`;

  window.open(request);
}
