//Autofocus on the name textbox
document.getElementById("name").focus();

const otherTextBox = document.getElementById("other-title");
const choices = document.getElementById("title");
otherTextBox.hidden = true;

/** target the 'Other' input field and hide it initially
 * make it appear when selected
 * 
 */
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

 //Hide colors in the Color: menu
 const colorMenu = document.getElementById("color");
 const shirtLabel = document.querySelector('label[for="color"]');
shirtLabel.textContent='Please Select a t-shirt theme';
 //Create variables for the Color: menu options
const shirtColors = colorMenu.children;
const jsPuns = design[1];
const heartShirt = design[2];
colorMenu.hidden = true;

design.addEventListener('change', (event) => {
    for (var i = 0; i < shirtColors.length; i++) {
      if (event.target.value === 'js puns') {
        shirtColors[0].selected = true;
        if (shirtColors[i].innerHTML.includes('JS Puns')) {
          shirtColors[i].style.display = '';
          shirtLabel.textContent='Color:';
          colorMenu.hidden = false;
        } else {
          shirtColors[i].style.display = 'none';
        }
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

//create a variable to store the checkboxes
const checkboxes = document.querySelectorAll('.activities input');
const activitiesSection = document.querySelector('.activities');
const activityCost = document.querySelectorAll('.data-cost');
//loop the data-cost for the children of class .activities
let priceTotalElement = document.createElement('textbox');
let priceTotal = 0;

//work on flexible checkbox options instead of locking up
document.querySelector('.activities').addEventListener('change', (e) => { 
    const clicked = e.target;
    const clickedCost = parseInt(clicked.getAttribute('data-cost'));
    if (clicked.checked) {
        priceTotal += clickedCost;
    } else {
          priceTotal -= clickedCost;
    } console.log('Total: $' + priceTotal);
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

const paymentMenu = document.getElementById('payment');
paymentMenu.removeChild(paymentMenu[0]);

const creditCard = document.getElementById('credit-card');
const paypal = document.getElementById('paypal');
const bitcoin = document.getElementById('bitcoin');
paypal.style.display = 'none';
bitcoin.style.display = 'none';
//creditCard.style.display = 'none';

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

const name = document.querySelector("#name"); 
const email = document.querySelector("#mail");

 function nameValidation() {
    const nameValue = name.value; 
    if (nameValue <= 0) {
      name.style.borderColor = "red";
      return false;  
    } else {
        name.style.borderColor = "white";
        return true;
    }
}

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

//work out this function
   function activitiesValidation() {
    const activitiesBoxes = document.querySelectorAll('.activities input');
    const legend = document.querySelector('.activities legend')
    let checkedBoxes = 0;
    for (let i = 0; i < activitiesBoxes.length; i ++) {
        if (activitiesBoxes[i].checked) {
            checkedBoxes += 1;
        } if (checkedBoxes === 0) {
            legend.style.color = "red";
            return false;
        } if (checkedBoxes > 0) {
            return true;
        }
     }   



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

