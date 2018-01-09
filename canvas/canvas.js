var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// context = c (kinda super object)
var c = canvas.getContext('2d');

// Rect
// c.fillStyle = 'rgba(255, 0, 0, 0.5)';
// c.fillRect(100, 100, 100, 100);  // x, y, w, h
// var r = 0;
// c.fillStyle = 'rgba(0, '+r+', 0, 0.5)';
// c.fillRect(200, 200, 100, 100);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(300, 100, 100, 100);
// console.log(canvas);
//
// // Line
// c.beginPath();
// c.moveTo(50,300); // x,y
// c.lineTo(300,100);
// c.stroke(); // now actual stroke visible
// c.lineTo(400,300);
// c.strokeStyle = '#fa34a3';
// c.stroke();
//
// // Arc / Circle
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI * 2, false);
// c.strokeStyle = 'blue';
// c.stroke();
//
// // many arcs
// for(var i=0; i<100; i++){
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   // var color =
//   c.beginPath();
//   c.arc(x, y, 10, 0, Math.PI * 2, false);
//   c.strokeStyle = 'green';
//   c.stroke();
// }

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();
    c.fillStyle = '#fa34a3';
    c.fill();
  }
  this.update = function() {
    if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

var circleArray = [];
for(var i=0; i<100; i++){
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;
  var dx = (Math.random() - 0.5) ;
  var dy = (Math.random() - 0.5);
  var radius = 30;

  var circle = new Circle(x, y, dx, dy, radius);
  circleArray.push(circle);
}

function animate(){
  requestAnimationFrame(animate); // create loop basically (call animate func again)
  c.clearRect(0, 0, innerWidth, innerHeight);
  for(var i=0; i<circleArray.length; i++){
    circleArray[i].update();
  }
}

animate();
