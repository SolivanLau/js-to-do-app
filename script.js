// Pseudo Code:
// GOAL: user's string value will be added as an individual item to our to do list
// TRACKING: submit event in our form input

// 1. Save values:

// query dom for form element and save it in a variable
const $toDoForm = document.querySelector('#toDoForm');
// query dom for input element and save it in a variable
const $toDoInput = document.querySelector('#toDoItem');
// query dom for ul element and save it in a variable
const $toDoList = document.querySelector('#toDoList');




// 2. attach submit event listener to form element

function evalAndAppend(event) {
    // prevent default behavior of the form is to refresh the page:
    event.preventDefault();
    // testing if we submit event is working as intended
    // console.log(event);
    // console.log('form has been submitted');

    // add the user's text content as a variable
    // any info entered into an input element will always be available via  
    // we should use const because the variable is being set and stored UPON SUBMIT event

    // can use .trim() method to eliminate all of the whitespace outside of words
    const userText = $toDoInput.value.trim();

    // string values are FALSEY. 

    //IF the user's value has content
    // create an li
    // add FA icon to li
    // add user textcontent to the li element

    if (userText !== "") {
        const createLi = document.createElement('li');
        createLi.innerHTML = '<i class="fa-regular fa-square"></i>';
        // we cannot use .innerText bc it replaces exactly what is there
        // can use template literals
        // can also add child (via creating text node)
        const toDoText = document.createTextNode(userText);

        createLi.appendChild(toDoText);

        // append li element as a CHILD to the ul element
        $toDoList.appendChild(createLi);

        // clear input
        $toDoInput.value = ''
    } else {
        // ELSE alert the user to please submit a valid to do
        alert('Please enter a valid task. Do not leave the input empty!')
    }
}

$toDoForm.addEventListener('submit', evalAndAppend);

// event listener method accepts two arguments
// event we are listening for
// callback function which holds logic we want to run


// WHEN callback function is within an event listener, the first parameter, whatever it maybe, is going to be the event


// query dom for icon element and save it in a variable;
// add event listener to icon variable... BUT
// WILL NOT WORK BC THIS CODE WILL RUN AT  PAGE LOAD... BUT Icon DOESN'T EXSIST YET

// EVENT DELEGATION TIME
// run event listener to parent object, ul instead of the checkbox
// we can use event object to hone in exactly where event occured

function checkToggle(event) {
    // only when icon is linked, do we want to update the checkbox 
    // console.log(event)
    // console.log clicking on the icon to find the properties we can see tag name

    // conditional
    if (event.target.tagName === 'I') {
        // toggle the fontawesome class so if it is checked, it should be unchecked and vice versa

        // font awesome icon element
        // we surrounded the event.target w a specific conditional of tagName === 'I', so event.target will === 'I' anyway - no need for redundancy

        const $iElement = event.target;

        $iElement.classList.toggle('fa-square');
        $iElement.classList.toggle('fa-square-check');

    }
}

$toDoList.addEventListener('click', checkToggle);
