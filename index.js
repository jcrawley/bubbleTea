var counter = 0;

var move = function(){
	var object = new Object();
	object.class = 'boba-ball';
	// object["left"] = Math.floor(Math.random() * 100) + "px";
	// object["top"] = Math.floor(Math.random() * 100) + "px";
	object.id = 'ball' + counter;
	
	jQuery('<div/>', object).appendTo('#boba-bottom');

	console.log(object);

	$("#ball" + counter).css('left', Math.floor(Math.random() * 100) + "%");
	$("#ball" + counter).css('top', Math.floor(Math.random() * 100) + "%");

	counter += 1;
}

window.setInterval(move, 1000);