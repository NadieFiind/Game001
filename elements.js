function buttons() {
	button0 = createButton("Wall");
	button0.mousePressed(function() {
		curAct = "addWall";
	});
	button1 = createButton("Ranger");
	button1.mousePressed(function() {
		curAct = "addRanger";
	});
	button2 = createButton("Knight");
	button2.mousePressed(function() {
		curAct = "addKnight";
	});
}