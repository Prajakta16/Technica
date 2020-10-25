var searchdrawing = document.getElementById('search-input');

searchdrawing.addEventListener('input', searchforLawyer);

/*****************************************************************************
 ** Function: searchDrawing
 ** Description: Live Research to find the drawing title that the user is looking for
 ** Parameters: Search text input
 ** Pre-coditions: User enters text in the search bar
 ** Post-conditions: Only display the search results
 *****************************************************************************/
function searchforLawyer(event){
    document.getElementById("demo").innerHTML = "We got you some searches for lawyers who can help you with";
    var searchVal = event.currentTarget.value.toLowerCase();
    console.log(searchVal)
    // var lawyer = document.getElementsByClassName('lawyers');
    // lawyer[0].style.display = 'block';
}