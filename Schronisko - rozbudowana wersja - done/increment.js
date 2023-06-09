var incrementButton = document.getElementsByClassName('inc');
var decrementButton = document.getElementsByClassName('dec');

for(var i = 0; i< incrementButton.length; i++){
    var button = incrementButton[i];
    button.addEventListener('click', function(event){
        //we check if clicking fires event
        var buttonClicked = event.target; 
        //console.log(buttonClicked);

        // button parent is box 
        //we are getting parrent element of our button but we need to get input element 
        var input = buttonClicked.parentElement.children[2];
        //console.log(input);

        var inputValue = input.value;
        //console.log(input.Value);

        //now we have to increment 

        var newValue = parseInt(inputValue) + 1;
        //console.log(newValue);

        input.value = newValue;
    })
}

for(var i = 0; i< decrementButton.length; i++){
    var button = decrementButton[i];
    button.addEventListener('click', function(event){
        var buttonClicked = event.target; 

        var input = buttonClicked.parentElement.children[2];
        
        var inputValue = input.value;

        var newValue = parseInt(inputValue) - 1;

        if(newValue >= 0){
            input.value = newValue;
        }
        else{
            input.value = 0; 
            alert('Ilość nie może być mniejsza od zera!');
        }
    })
}

// Create a "close" button and append it to each list item
var myNodelist = document.getElementsByClassName('box');
var i;
for (i = 0; i < myNodelist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  myNodelist[i].appendChild(span);
}

// Click on a close button to hide the current list item
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function decrementAnimalCount(buttonClicked) {
  input = buttonClicked.parentElement.children[2];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) - 1;
  input.value = newValue;

  if(newValue >= 0){
    input.value = newValue;
}
else{
    input.value = 0; 
    alert('Ilość nie może być mniejsza od zera!');
}
}

function incrementAnimalCount(buttonClicked) {
  input = buttonClicked.parentElement.children[2];
  var inputValue = input.value;
  var newValue = parseInt(inputValue) + 1;
  input.value = newValue;
}

function closingButton(parentElement) {  
  parentElement.style.display = "none";  
  }

function addElement() {
  var newPetName = document.querySelector('#newPet').value;
  var newPetContainer = document.createElement('div');
  newPetContainer.classList.add('box');

  var newPetLable = document.createElement('label');
  newPetLable.setAttribute('for', 'name'); 
  newPetLable.innerText = newPetName;
  newPetContainer.insertAdjacentElement('afterbegin', newPetLable); 

  const decrementButton = document.querySelector('.newButtonDec');
  var newButtonDec = document.createElement('div');
  newButtonDec.classList.add('dec');
  newButtonDec.innerText = "-";
  newPetContainer.insertAdjacentElement('beforeend', newButtonDec);
  newButtonDec.addEventListener('click', (event) => decrementAnimalCount(event.target)); 
  console.log(newButtonDec);

  const inputField = document.querySelector('.input-field');
  var newInPutField = document.createElement('input'); 
  newInPutField.setAttribute('value', '0');
  newPetContainer.insertAdjacentElement('beforeend', newInPutField);
  console.log(newInPutField);

  const incrementButton = document.querySelector('.newButtonInc');
  var newButtonInc = document.createElement('div');
  newButtonInc.classList.add('inc');
  newButtonInc.innerText = "+";
  newPetContainer.insertAdjacentElement('beforeend', newButtonInc);
  newButtonInc.addEventListener('click', (event) => incrementAnimalCount(event.target)); 
  console.log(newButtonInc);

  const closeButton = document.querySelector('box');
  var newCloseButton = document.createElement("SPAN");
  var newCloseButtonText = document.createTextNode("\u00D7");
  newCloseButton.className = "close";
  newCloseButton.appendChild(newCloseButtonText);
  newPetContainer.appendChild(newCloseButton);
  console.log(newCloseButton);

  newCloseButton.addEventListener('click', (event) => {
    closingButton(event.target.parentElement);
  });

  document.querySelector('#myDIV').insertAdjacentElement('beforebegin', newPetContainer);
}

document.querySelector(".addBtn").addEventListener("click", addElement);
