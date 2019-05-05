   
    var button = document.querySelector('.doggo-button');
    var textBoxName = document.querySelector('#name-input');
    var changeThisName = document.querySelector('#some-dogs');


  button.addEventListener('click', generateName);

  function generateName() {

    changeThisName.innerText = textBoxName.value;
    textBoxName.value = "";
  }