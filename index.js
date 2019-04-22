"use strict";

const apiKey = 'HRhVGgQg9v94QbvlZaZprcpZXGb9n6GoQyCgPy7n';
const addFields = ['addresses'];
const searchURL = 'https://developer.nps.gov/api/v1/parks';

function handleSubmitForm(){
    $('#state-selection-form').submit(function(){
        event.preventDefault();
        const stateSelections = collectStates();
        console.log(stateSelections);
        let maxResults = $('#num-results').val();
        const parkInfo = collectParkInfo(stateSelections, maxResults);
        // a function the fills in the view info with parkInfo array results
// {"total": "6",
//   "data": [
//     {
//       "states": "MN",
//       "directionsInfo": "Traveling northeast or southwest on MN Hwy 61 visitors will see signs alerting the approach to Grand Portage National Monument.  A right turn exit lane or left turn from Hwy 61 at the Grand Portage Trading Post will take visitors onto Casino Road.  Turn left at the first stop sign from Casino Road to Mile Creek Road.   About 3/4 mile on Mile Creek Road, look for a large wooden entrance sign on your left.  Turn left up the short hill into the Heritage Center parking lot.",
//       "directionsUrl": "http://www.nps.gov/grpo/planyourvisit/directions.htm",
//       "url": "https://www.nps.gov/grpo/index.htm",
//       "weatherInfo": "Short, warm summers and long, cold winters define the climate of northern Minnesota.\nAverage range of summer temperature is from 55°F to 78°F in July and average range of winter\ntemperatures is from –11°F to 12°F in January.\nAverage annual precipitation in Grand Portage, MN is about 32 inches.",
//       "name": "Grand Portage",
//       "latLong": "lat:47.99294217, long:-89.75573031",
//       "description": "Travel into the past to discover the present. Explore the partnership of the Grand Portage Ojibwe and the North West Company during the North American fur trade and the NPS today. Follow pathways into a distant time. Experience the sights and smells of a bustling depot reconstructed in its exact location. Hear the beat of the drum echo over Gichigami - Lake Superior.",
//       "designation": "National Monument",
//       "parkCode": "grpo",
//       "addresses": [
//         {
//           "postalCode": "55605",
//           "city": "Grand Portage",
//           "stateCode": "MN",
//           "line1": "P.O. Box 426",
//           "type": "Mailing",
//           "line3": "",
//           "line2": ""
//         },
//         {
//           "postalCode": "55605",
//           "city": "Grand Portage",
//           "stateCode": "MN",
//           "line1": "170 Mile Creek Road",
//           "type": "Physical",
//           "line3": "",
//           "line2": ""
//         }
//       ],
//       "id": "E463E13F-FCD4-41B3-AEF3-BA3199E04399",
//       "fullName": "Grand Portage National Monument"
//     },
    });
}

// a function to create an array of the state entries

function collectStates(){
    const optionsSelected = $('#state-select').val();
    return optionsSelected; 
}

// a function to call the API with the query parameters
    // promise

function collectParkInfo(stateSelections, maxResults, addFields){
    const params = {
        stateCode: stateSelections,
        limit: maxResults,
        fields: addFields,
        language: "en",
    };
    const queryString = formatHeaderOptions(params);
    const url = searchURL + '?' + queryString;
    
    const options = {
        headers: new Headers({
        api_key: apiKey})
    };
    
    fetch(url, options)
        .then(response => response.json())
        .then(responseJson => responseJson.data);
}    

// a function to create the headers we send to the API

function formatHeaderOptions(params) {
    const queryItems = Object.keys(params).map(key => `${key}=${params[key]}`);
    return queryItems.join('&');
}




handleSubmitForm();


