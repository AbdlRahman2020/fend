/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/

const sections = document.getElementsByTagName('section');
const navBar = document.getElementById("navbar__list");


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/

/* Function takes an ul and creates a menu item for each*/
function makeNavBar(array) {
    
    let i = 1;
    for (const section of array)
    {
    const item = document.createElement('ul');
    item.id = section.getAttribute("id");
    item.className = "navbar_item";
    console.log(item.id);
    console.log(item.className);
    name = section.getAttribute("data-nav");
    item.textContent = name;
    navBar.appendChild(item);
    i++;
    }
    return navBar;
}



function onClick(evt){
    
}


/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/




// Build menu 
document.addEventListener('DOMContentLoaded', makeNavBar (sections));


// Scroll to section on link click
document.querySelectorAll('.secion').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        //console.log(this.getAttribute("section1"));
        document.querySelector('href').scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// Set sections as active

