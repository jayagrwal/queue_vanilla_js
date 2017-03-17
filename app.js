var my_queue = new MyQueue()

function showInput() {
	var current_queue = my_queue.getQueue()
	console.log(current_queue);
	var queue_level = ""
	current_queue.forEach(function(value){
		queue_level = queue_level + "<div>"+value+"</div>"
	})
	document.getElementById("scrn").innerHTML = queue_level
};

function pushItemInQueue() {
	
    if (my_queue.isOverflow()) {
      document.getElementById("scrn").innerHTML ="Queue Overflow";
    }else{
	my_queue.push(document.getElementById("qinput").value);
	showInput()
}
};

function checkInput(){
	if(document.getElementById("qinput").value=="")
	{
		alert("Enter Valid Input!!")
	}
	else{
		pushItemInQueue();
	}
}



document.getElementById("pushbtn").addEventListener ("click", checkInput,false);

function popItemFromQueue() {
	if (my_queue.isUnderflow()) {
     document.getElementById("scrn").innerHTML ="Queue Underflow";
    }else{
	my_queue.pop();
	showInput()
}
};
document.getElementById("popbtn").addEventListener ("click", popItemFromQueue,false);