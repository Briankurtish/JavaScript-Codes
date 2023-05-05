let calculation = localStorage.getItem('calculation') || '';
    displayCalculation();
    

    function updateCalculation(button){
      update = calculation += button;
      console.log(update);
      saveCalculation();
    }

    function saveCalculation(){
      localStorage.setItem('calculation', calculation);
    }

    function displayCalculation(){
      document.querySelector('.js-display').innerHTML = calculation;
    }