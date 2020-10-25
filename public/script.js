function init(){
    for(var i = 0; i < eachMes.length; i++){
        console.log(eachMes[i]);
        var eachMes = document.getElementsByClassName('one-message');

    }
}

var mes = document.getElementById('post')
mes.addEventListener('click', checkInput)
init();

function checkInput(event){
console.log("pressed")
    var aut = document.getElementById('author-input').value
    var text = document.getElementById('text-input').value
    var type = document.getElementsByName('type')
    if((aut.split(" ").join("").length == 0) || text.split(" ").join("").length == 0 || (type[0].checked == false && type[1].checked == false && type[2].checked == false)){
        console.log("called")
        document.getElementById("warning").style.display = "block";
    }
    else{
        console.log("called1")
        document.getElementById("warning").style.display = "none";
        var t
        if(type[0].checked == true) t = 1
        else if(type[1].checked == true) t = 2
        else if(type[2].checked == true) t = 3
        insertMessage(aut, text, t)
    }

}
function insertMessage(aut, tex, t){
    console.log("called")
    var newMessage = {
        text: tex,
        author: aut,
        type: t
    };
    var mesHtml = Handlebars.templates.message(newMessage);
    document.getElementById("mes-container").insertAdjacentHTML('beforeend', mesHtml);
    saveMessage(newMessage);
}
function saveMessage(newMessage){
    var request = new XMLHttpRequest();
	var requestUrl = '/chat/save';
	request.open('POST', requestUrl);
	var requestBody = JSON.stringify({
        text: newMessage.text,
        author: newMessage.author,
        type: newMessage.type
    });
    request.setRequestHeader(
		'Content-Type',
		'application/json'
	);
    request.send(requestBody);
    clearFields();
}

function clearFields(){
    document.getElementById('author-input').value = ""
    document.getElementById('text-input').value = ""
    var type = document.getElementsByName('type')
    for(var i = 0; i < type.length; i++){
        type[i].checked = false;
    }
}


