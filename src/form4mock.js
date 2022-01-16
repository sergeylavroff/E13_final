

export function createForm() {
    var form = document.createElement("form");
    form.setAttribute('method',"get");
    form.setAttribute('id', "form4mockme")

    var name = document.createElement("input");
    name.setAttribute('type',"text");
    name.setAttribute('name',"Name");
    name.setAttribute('placeholder', "Name");

    var email = document.createElement("input");
    email.setAttribute('type',"text");
    email.setAttribute('name',"Email");
    email.setAttribute('inputmode', "email");
    email.setAttribute('placeholder', "Email");

    var id = document.createElement("input");
    id.setAttribute('type',"text");
    id.setAttribute('name',"ID");
    id.setAttribute('placeholder', "ID");

    var phone = document.createElement("input");
    phone.setAttribute('type',"text");
    phone.setAttribute('name',"Phone");
    phone.setAttribute('inputmode', "tel");
    phone.setAttribute('placeholder', "Phone");

    var submit = document.createElement("input");
    submit.setAttribute('type',"submit");
    submit.setAttribute('value',"Submit");
    submit.setAttribute('id','submitFormButton');


    form.appendChild(id);
    form.appendChild(name);
    form.appendChild(email);
    form.appendChild(phone);
    form.appendChild(submit);

    document.getElementsByClassName('contacts')[0].appendChild(form);
};

export function submitForm() {
    var ext = document.getElementById('form4mockme').children;
        var id = ext.ID.value;
        var name = ext.Name.value;
        var email = ext.Email.value;
        var phone = ext.Phone.value;

        var request = ('http://127.0.0.1:2525/contacts?' + ((id) ? `id=${id}`:'') + ((name) ? `name=${name}`:'') + ((email) ? `email=${email}`:'') + ((phone) ? `phone=${phone}`:''));
        
        window.open(request);
}

    




