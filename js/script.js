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



 /** Update the "Color" Field to read "Please Select a t-shirt theme" 
  * Hide the colors in the "Color" drop down menu.
  * */
 
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

design.addEventListener('change', (event) => {
    for (var i = 0; i < shirtColors.length; i++) {
      console.log(shirtColors[i]);
      console.log(event.target.value);
      if (event.target.value === 'js puns') {
        shirtColors[0].selected = true;
        if (shirtColors[i].innerHTML.includes('JS Puns')) {
          shirtColors[i].style.display = '';
          shirtLabel.textContent='Color:';
        } else {
          shirtColors[i].style.display = 'none';
        }
      } else if (event.target.value === 'heart js') {
        shirtColors[3].selected = true;
          if (shirtColors[i].innerHTML.includes('♥ JS')) {
              shirtColors[i].style.display = '';
              shirtLabel.textContent='Color:';
          } else {
              shirtColors[i].style.display = 'none';
          }
      }
    }
  });

