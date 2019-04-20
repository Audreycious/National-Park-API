







$('#state-selection-form').submit(function(){
let ddSelect = [];
    ddSelect = $('.state-select').val();
    let maxCnt = $('#frm-MaxCount').val();
    CallAPi(maxCnt,ddSelect);
});

// a function to call the API with the query parameters
    // promise

function CallAPi(maxCount,selectedStates)
{

}






// a function to validate or ignore duplicate state entries

// a function to create an array of the state entries

// a function to create the headers we send to the API

// a function (or some attributes to the form) to block the     max results entry from submitting the form 

// a function that maps each result 'key' from the responseJson into an array