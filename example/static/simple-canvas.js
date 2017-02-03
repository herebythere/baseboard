function draw() {
	var ctx = document.getElementById('tutorial').getContext('2d');
	ctx.globalCompositeOperation = 'overlay';	
	
	for (var i = 0; i < 50; i++){
		ctx.fillStyle = "rgba(" + 100 + ", " + (i * 5) + ", " 
					+ (i * 5) + ", " + Math.random() + ")";
		ctx.fillRect(Math.random() * 300, Math.random() * 300, 100, 100);
	}
};


