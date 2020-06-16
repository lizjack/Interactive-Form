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

/***** TSHIRT SECTION *****/
 
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
/***** ACTIVITY SECTION *****/
//create a variable to store the checkboxes
const checkboxes = document.querySelectorAll('.activities input');
const activitiesSection = document.querySelector('.activities');
const activityCost = document.querySelectorAll('.data-cost');
//loop the data-cost for the children of class .activities
let priceTotalElement = document.createElement('textbox');
let priceTotal = 0;

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
        if (clickedType === sessionTime && clicked !== checkboxes) {
            if (true) {
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }
});
