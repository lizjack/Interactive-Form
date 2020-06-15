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
 //shirtLabel.textContent='Please Select a t-shirt theme';
 //colorMenu.hidden = true;
 //Create variables for the Color: menu options
const shirtColors = colorMenu.children;
const jsPuns = design[1];
const heartShirt = design[2];

design.addEventListener('change', (event) => {
    if (jsPuns.selected === true) {
   colorMenu.options[3].hidden = true; 
   colorMenu.options[4].hidden = true; 
   colorMenu.options[5].hidden = true; 
    } if (heartShirt.selected === true) {
        colorMenu.options[0].hidden = true; 
        colorMenu.options[1].hidden = true; 
        colorMenu.options[2].hidden = true; 
         }
});


//Add an event listener so the shirt colors correspond with the designs.
design.addEventListener('change', (event) => {
    //if (user clicks on JS Puns design) {
        //then 3 shirt themes pop up, they are hidden=false;
    //} if (user clicks on i heart js design) {
    // then 3 different themes pop up, they are hidden=false;  
   // } 
});


/**<div>
<label for="design">Design:</label>
<select id="design" name="user-design">
  <option>Select Theme</option>
  <option value="js puns">Theme - JS Puns</option>
  <option value="heart js">Theme - I &#9829; JS</option>
</select>
</div>

<div id="colors-js-puns" class="">
<label for="color">Color:</label>
<select id="color">
  <option value="cornflowerblue">Cornflower Blue (JS Puns shirt only)</option>
  <option value="darkslategrey">Dark Slate Grey (JS Puns shirt only)</option> 
  <option value="gold">Gold (JS Puns shirt only)</option> 
  <option value="tomato">Tomato (I &#9829; JS shirt only)</option>
  <option value="steelblue">Steel Blue (I &#9829; JS shirt only)</option> 
  <option value="dimgrey">Dim Grey (I &#9829; JS shirt only)</option> 
</select>
</div>
</div>               
</fieldset> **/ 

