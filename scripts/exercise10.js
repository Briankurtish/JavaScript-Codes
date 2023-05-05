function checkClassName(){
  const buttonElement = document.querySelector('.js-test-button');

  if(buttonElement.classList.contains('js-test-button')){
    console.log(buttonElement.classList.value)
  }
}

// The word "toggle" means turn on/off.
function toggleButton(selector) {
  const button = document.querySelector(selector);
  if (!button.classList.contains('is-toggled')) {

    turnOffPreviousButton();
    button.classList.add('is-toggled');
  } else {
    button.classList.remove('is-toggled');
  }
}

function turnOffPreviousButton(){
  const previousButton = document.querySelector('.is-toggled');
  if(previousButton){
    previousButton.classList.remove('is-toggled');
  }
}


function checkEntryEvent(event){
  let textInput = document.querySelector('.js-input');
  inputValue = textInput.value;

  if(inputValue === ''){
    document.querySelector('.js-display').innerHTML = "";
  }
  else if(Number(inputValue) < 0){
    document.querySelector('.js-display').innerHTML = "Error: Cost cannot be less than $0";
  }

}

