print(called)
var type = document.getElementsByClassName('type');
for(var i = 0; i < type.length(); i++){
   if(type[i] != 1){
    type[i].parentElement.backgroundColor = blue;
   }
}