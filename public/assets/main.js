var socket = io();

const doc = document.getElementById('messages');
doc.style.color = "black";

socket.on('touch',function(message){
    doc.innerHTML = message;
    touch();
    setTimeout(touch,1000);
    console.log(message);
})
function touch(){
    if (doc.style.color === "black") {
        doc.style.color = "white";
    } else {
		doc.style.color = "black";
		doc.innerHTML = "";
	}
}