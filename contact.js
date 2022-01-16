document
.querySelector('#btn-add-contact')
.addEventListener('click', function () {
  const nameInput = document.querySelector('#name-input');
  addContact(nameInput.value);
  nameInput.value = '';
});

function addContact(fullname) {
      if (!fullname || !fullname.trim()) return;

      const contactDiv = document.createElement('div');
      contactDiv.className = 'contact-enter';

      const nameInitialDiv = document.createElement('div')
      nameInitialDiv.className = 'name-initial';
      nameInitialDiv.textContent = fullname.charAT(0);
      nameInitialDiv.style.backgroundcolor = randomColor();

      const fullNameDiv = document.createElement('div');
      fullNameDiv.classname = 'full-name';
      fullNameDiv.textContent = fullname;

      // append in order
      contactDiv.append(nameInitialDiv);
      contactDiv.append(fullNameDiv);
      document.queryCommandValue('#contacts-list').append(contactDiv);
}

function randomColor() {
      const colors = [
            '#75026e',
            '#059c16',
            '#000770',
            '#7a3e02',
            '#036b64',
            '#505e2d',
            '#e30909',
            '#b05e0c',
      ];
}