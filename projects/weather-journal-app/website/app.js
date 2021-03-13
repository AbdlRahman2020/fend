/* Global Variables */
// Personal API Key for OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
const apiKey = '&appid=5b1d870d14c6880b478ff18bd3ef33e9';
let zipCode = document.getElementById('zip').value;
console.log(zipCode);
let feelings = document.getElementById('feelings').value;
// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();



// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', performAction);




/* Function to GET Web API Data*/
const getWeather = async () => {
  zipCode = document.getElementById('zip').value;
  feelings = document.getElementById('feelings').value;

  const req = await fetch(baseURL + zipCode + apiKey)
  try {

    const data = await req.json();
    //console.log(data)
    return data;

  }

  catch (error) {
    console.log("error", error);
    // appropriately handle the error
  }
}

/* Function called by event listener */
function performAction(e) {
  if (zip.value === "") {
    alert('Please enter a valid Zip Code');
  } else {
    getWeather()
      .then(function (allData) {
        postData('/add', { temp: allData.main.temp, date: newDate, userResponse: feelings })
      })
      .then(function () {
        retrieveData('/all');
      })
  }
}


/* Function to POST data */
const postData = async (url = '', data = {}) => {
  //console.log(data);
  const response = await fetch(url, {
    method: 'POST',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    // Body data type must match "Content-Type" header        
    body: JSON.stringify(data),
  });

  try {
    const newData = await response.json();
    console.log(newData);
    return newData;
  } catch (error) {
    console.log("error", error);
  }
}



/* Function to GET Project Data */
const retrieveData = async (url) => {
  
  const req = await fetch(url); 

  try {
    const newData = await req.json();
    let len = newData.length;
    
    const newEntry = {
      temperaturess: newData[len - 1].temperature,
      datess: newData[len - 1].date,
      userResponsess: newData[len - 1].userResponse
    }
    console.log(newData[len - 1]);
    let displayDate = document.getElementById('date');
    let  displayTemp = document.getElementById('temp');
    let  displayFeelings = document.getElementById('content');
    
    displayDate.innerHTML = "Date: " + newEntry.datess;
    displayTemp.innerHTML = "Temperature: " + newEntry.temperaturess;
    displayFeelings.innerHTML = "Feelings: " + newEntry.userResponsess;

  } catch (error) {
    console.log("error", error);
  }
}
