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

//find a way to loop this but at very least, find a way to 
//be able to click between the options, like the first handler
design.addEventListener('change', (event) => {
    if (jsPuns.selected === true) {
   colorMenu.options[3].hidden = true; 
   colorMenu.options[4].hidden = true; 
   colorMenu.options[5].hidden = true; 
    }
}); 
 design.addEventListener('change', (event) => {
     if (heartShirt.selected === true) {
        colorMenu.options[0].hidden = true; 
        colorMenu.options[1].hidden = true; 
        colorMenu.options[2].hidden = true; 
     }
 });