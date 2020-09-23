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
// Define selector for selecting 
        // anchor links with the hash 
        let anchorSelector = '.navbar__menu'; 
      
        // Collect all such anchor links 
        let anchorList =  
            document.querySelectorAll(anchorSelector); 
          
        // Iterate through each of the links 
        anchorList.forEach(link => { 
            link.onclick = function (e) { 
      
                // Prevent scrolling if the 
                // hash value is blank 
                e.preventDefault(); 
          
                // Get the destination to scroll to 
                // using the hash property 
                let destination =  
                    document.querySelector(this.hash); 
          
                // Scroll to the destination using 
                // scrollIntoView method 
                destination.scrollIntoView({ 
                    behavior: 'smooth' 
                }); 
            } 
        }); 


// Set sections as active
function myFunction() {
    var x = document.getElementById("navbar__list");
    if (x.className === "navbar__menu") {
      x.className += " hover";
    } else {
      x.className = "navbar__menu";
    }
  }

