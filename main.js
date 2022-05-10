// settings
var cc = 100;

// action
var curAct = "none";

// elements
var button0;
var button1;
var button2;

var grids = new Array(cc);
function setup() {
	createCanvas(360, 360);
	
	// elements
	buttons();
	
	// create 2D Array
	for (var i = 0; i < grids.length; i++) {
		grids[i] = new Array(cc);
	}
	
	// asign objects
	for (var i = 0; i < grids.length; i++) {
		for (var j = 0; j < grids[i].length; j++) {
			grids[i][j] = new Grid((width / cc) * i, (height / cc) * j, width / cc);
		}
	}
}
function draw() {
	background(200, 255, 200, 100);
	for (var i = 0; i < grids.length; i++){
		for (var j = 0; j < grids[i].length; j++) {
			grids[i][j].render();
		}
	}
}
function Grid(x, y, size) {
	this.x = x;
	this.y = y;
	this.unit = new Empty();
	this.render = function() {
		this.unit.render(this.x, this.y, size);
	};
	this.addUnit = function(unit) {
		if (this.x <= mouseX && this.x + size >= mouseX) {
			if (this.y <= mouseY && this.y + size >= mouseY) {
				this.unit = unit;
			}
		}
	};
}
function mousePressed() {
	for (var i = 0; i < grids.length; i++) {
		for (var j = 0; j < grids[i].length; j++) {
			if (curAct === "none") {
				ellipse(mouseX, mouseY, width / cc / 1.5);
			} else if (curAct === "addWall") {
				grids[i][j].addUnit(new Wall());
			} else if (curAct === "addRanger") {
				grids[i][j].addUnit(new Ranger());
			} else if (curAct === "addKnight") {
				grids[i][j].addUnit(new Knight());
			}
		}
	}
}