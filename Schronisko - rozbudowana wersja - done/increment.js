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

function addElement() {
  var newPetName = document.querySelector('#newPet').value;
  console.log(newPetName);
  var newPetContainer = document.createElement('div');
  newPetContainer.classList.add('box');

  var newPetLable = document.createElement('label');
  newPetLable.setAttribute('for', 'name'); 
  newPetLable.innerText = newPetName
  newPetContainer.insertAdjacentElement('afterbegin', newPetLable); 
  //---------------------
  //var newButtons = document.querySelector('div.dec'); 
  //console.log(newButtons);
  //var newButtonDec = document.createElement('div');
  //newButtonDec.classList.add('dec');
  //---------------------

  /*
    Jako następne chcesz dodać przyciski + oraz -. W tym celu musisz utworzyć kazdy z nich osobno. 
    W ramach pomocy wypiszę Ci plan działania :)
  */
  // 1. Utwórz nowy element typu 'button' i przypisz go do zmiennej. Wykorzystaj w tym celu obiekt "document", a konkretnie jego metodę "createElement".
  // (Mój komentarz: w twoim pliku HTML uzywasz 'div' jako elementu który ma być "klikalny", innymi słowy - traktujesz 'div' jako przycisk. Jest to błąd, w języku HTML kazdy element ma swoją rolę i dobrze jest trzymać się tych zasad. Dzięki temu kod będzie bardziej zrozumiały dla innych osób które będą go czytać. 
  // Tak zwana "semantyka" kodu ma tez ogromne znaczenie kiedy tworzy się aplikacje które mogą być uzywane przez osoby niepelnosprawne, np. niewidomych. Są urządzenia które czytają na głos treść strony, niestety w sytuacjach kiedy prawidłowa semantyka nie jest zachowana takie czytniki nie działają poprawnie.)

  // 2. Przypisz odpowiednią klasę do twojego przycisku. W tym celu uzyj metody classlist.add na twoim obiekcie (analogicznie jak w linii nr 73).

  // 3. Przypisz zawartość tekstową do twojego przycisku. Mozesz to zrobić poprzez przypisanie wartości do właściwości innerText (analogicznie jak w linii 77). W zaleznosci od przycisku, powinieneś przypisać "+" lub "-".

  // 4. Umieść gotowy element na stronie. Postępuj analogicznie jak w linii 78.
    
 // Tak wygląda kod: 

  var newButton = document.createElement('div');
  newButton.classList.add('dec');
  newButton.innerText = "-";
  newPetContainer.insertAdjacentElement('beforeend', newButton);
  console.log(newButton); 

  document.querySelector('#myDIV').insertAdjacentElement('beforebegin', newPetContainer);
}

document.querySelector(".addBtn").addEventListener("click", addElement);


