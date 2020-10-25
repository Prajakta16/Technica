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
    var law =  document.getElementsByClassName('one-lawyer');
    for(var i = 0; i < law.length; i++){
        console.log("called")
        var s = law[i].textContent.toLowerCase()
         if(s.search(searchVal) === -1 ){
             law[i].style.display = "none";
         }
         else{
            law[i].style.display = 'block'
         }
    }
}