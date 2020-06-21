//Autofocus on the name textbox
document.getElementById("name").focus();

const otherTextBox = document.getElementById("other-title");
const choices = document.getElementById("title");
otherTextBox.hidden = true;

// target the 'Other' input field and hide/appear as selected
choices.addEventListener('change', (event) => {
    if (event.target.value === 'other') {
    otherTextBox.hidden = false; 
    } if (event.target.value !== 'other') {
        otherTextBox.hidden = true;
    }
});

/***** T-shirt Section *****/

  //Hide Select Theme option in Design: menu
 const design = document.getElementById("design");
 design.options[0].style.display='none';

 const colorMenu = document.getElementById("color");
 const shirtLabel = document.querySelector('label[for="color"]');
//Create text prompting user to select a theme before seeig color options
 shirtLabel.textContent='Please Select a t-shirt theme';
 //Create variables for the Color: menu options
const shirtColors = colorMenu.children;
const jsPuns = design[1];
const heartShirt = design[2];
//Initially hide color menu
colorMenu.hidden = true;

//Create eventListener to display corresponding shirt colors for shirt designs
design.addEventListener('change', (event) => {
    for (var i = 0; i < shirtColors.length; i++) {
    //if 'Js Puns' is selected, display shirts with 'JS Puns'
        if (event.target.value === 'js puns') {
        shirtColors[0].selected = true;
        if (shirtColors[i].innerHTML.includes('JS Puns')) {
          shirtColors[i].style.display = '';
          shirtLabel.textContent='Color:';
          colorMenu.hidden = false;
        } else {
          shirtColors[i].style.display = 'none';
        }
    //if 'heart js' shirt is selected, display shirts that include '♥ JS'
      } else if (event.target.value === 'heart js') {
        shirtColors[3].selected = true;
          if (shirtColors[i].innerHTML.includes('♥ JS')) {
              shirtColors[i].style.display = '';
              shirtLabel.textContent='Color:';
              colorMenu.hidden = false;
          } else {
              shirtColors[i].style.display = 'none';
          }
      }
    }
  });

/***** Activity Section *****/

//create a variable to store the checkboxes, activities section, cost
const activitiesSection = document.querySelector('.activities');
const checkboxes = document.querySelectorAll('.activities input');
const activityCost = document.querySelectorAll('.data-cost');
let priceTotalElement = document.createElement('textbox');
let priceTotal = 0;

//create eventListener to look for total cost of activities
//eventListener also disables conflicting activities so user cannot register for two events at the same time
document.querySelector('.activities').addEventListener('change', (e) => { 
    const clicked = e.target;
    const clickedCost = parseInt(clicked.getAttribute('data-cost'));
    if (clicked.checked) {
        priceTotal += clickedCost;
    } else {
          priceTotal -= clickedCost;
    }
    activitiesSection.appendChild(priceTotalElement);
    priceTotalElement.innerHTML = 'Total: $' + priceTotal;

    const clickedType = clicked.getAttribute('data-day-and-time');
    for (let i = 0; i < checkboxes.length; i ++) {
        const sessionTime = checkboxes[i].getAttribute('data-day-and-time');
        if (clickedType === sessionTime && clicked !== checkboxes[i]) {
            if (clicked.checked) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }
});

/***** Payment Section*****/

//create payment menu variable get rid of "select payment method" option
const paymentMenu = document.getElementById('payment');
paymentMenu.removeChild(paymentMenu[0]);
//create variables for payment methods and hide paypal/bitcoin instructions
const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paypal.style.display = 'none';
bitcoin.style.display = 'none';

//create eventlistener to show and hide payment method instructions depending on if they are selected
paymentMenu.addEventListener('change', (event) => {
    if (event.target.value === 'credit card') {
        creditCard.style.display = '';
    } else {
        creditCard.style.display = 'none';
    } if (event.target.value === 'paypal') {
        paypal.style.display = '';
    } else {
        paypal.style.display = 'none';
    } 
    if (event.target.value === 'bitcoin') {
        bitcoin.style.display = '';
    } else {
        bitcoin.style.display = 'none';
    }
});

/***** Form Validation Section *****/

 //create name and email variables
const name = document.querySelector("#name"); 
const email = document.querySelector("#mail");

//create a function that validates user name and alerts user if input is incompatible
 function nameValidation() {
    const nameValue = name.value; 
    const nameRegex = /^[a-z]+\s?[a-z]+?-?[a-z]+?$/i;
    const checkName = nameRegex.test(nameValue);
    if (!checkName) {
      name.style.borderColor = "red";
      return false;  
    } else {
        name.style.borderColor = "white";
        return true;
    }
}
//createa a function that validates user email and alerts user if input is incompatible
 function emailValidation() {
    const emailValue = email.value;
    const emailRegex = /^[^@]+@[^@.]+\.[a-z]+$/i ;
    const checkEmail = emailRegex.test(emailValue);
     if (!checkEmail) { 
      email.style.borderColor = "red";
      return false;
    } else {
        email.style.borderColor = "white";
        return true;
    }
}

//create a function that checks for at least one activity registration and alerts user is no activity is checked
    function activitiesValidation() {
    const activitiesBoxes = document.querySelectorAll('.activities input');
    const legend = document.querySelector('.activities legend');
    let checkedBoxes = 0;
    for (let i = 0; i < activitiesBoxes.length; i ++) {
        if (activitiesBoxes[i].checked) {
            checkedBoxes += 1;
        } 
    }
    if (checkedBoxes === 0) {
            legend.style.color = "red";
            return false;
        } if (checkedBoxes > 0) {
            return true;
        }
      }     
//create a function that validates credit card input has 13-16 number characters
 function creditCardValidation() {
    const creditNumber = document.getElementById('cc-num');
    const creditInput = creditNumber.value;
    const creditRegex = /^[0-9]{13,16}$/;
    const checkCredit = creditRegex.test(creditInput);
    if (!checkCredit) {
        creditNumber.style.borderColor = "red";
        return false;
    } else {
        creditNumber.style.borderColor = "white";
        return true;
    }
} 

//create a function that validates zip code input has 5 number characters
function zipCodeValidation() {
    const zipCode = document.getElementById('zip');
    const zipCodeValue = zipCode.value;
    const zipRegex = /^[0-9]{5}$/
    const checkZip = zipRegex.test(zipCodeValue);
    if (!checkZip) {
        zipCode.style.borderColor = "red";
        return false;
    } else {
        zipCode.style.borderColor = "white";
        return true;
    }
}

//create a function that validates cvv input has 3 characters
function cvvValidation() {
    const cvv = document.getElementById('cvv');
    const cvvValue = cvv.value;
    const ccvRegex = /^[0-9]{3}$/;
    const checkCvv = ccvRegex.test(cvvValue); 
    if (!checkCvv) {
        cvv.style.borderColor = "red";
        return false;
    } else {
        cvv.style.borderColor = "white";
        return true;
    }
}

/** create an eventListener that checks to see if validation functions are true/false. 
 * if validations functions are false, it prevents the form from being submitted. **/
 document.addEventListener('submit', (e) => {
    if (!nameValidation()) {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    }

    if (!emailValidation()) {
    e.preventDefault();
    document.documentElement.scrollTop = 0;
    }

    if (!activitiesValidation()) {
    e.preventDefault();
    } 
//Credit card/cvv/zipcode validation is on ly required if the credit card payment method is selected
    if (paymentMenu[0].selected) {
    creditCardValidation(); 
    if(!creditCardValidation()) {
    e.preventDefault();
    }
} 

    if (paymentMenu[0].selected) {
    cvvValidation();
    if (!cvvValidation()) {
    e.preventDefault();
    }
}

    if (paymentMenu[0].selected) {
    zipCodeValidation(); 
    if (!zipCodeValidation())  {
    e.preventDefault();
    } 
}
});