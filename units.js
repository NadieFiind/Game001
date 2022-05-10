function Empty() {
	this.render = function(x, y, size) {};
}
function Wall() {
	this.render = function(x, y, size) {
		push();
		noStroke();
		fill(0);
		square(x, y, size);
		pop();
	};
}
function Ranger() {
	this.render = function(x, y, size) {
		push();
		noStroke();
		fill(0, 0, 255);
		square(x + 2, y + 2, size - 4);
		pop();
	};
}

function Knight() {
	this.render = function(x, y, size) {
		push();
		noStroke();
		fill(0, 180);
		square(x + 2, y + 2, size - 4);
		pop();
	};
}