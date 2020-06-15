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

 /** Update the "Color" Field to read "Please Select a t-shirt theme" 
  * Hide the colors in the "Color" drop down menu.
  * 
 */
