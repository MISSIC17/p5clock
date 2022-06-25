function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
}
function formatter(digit){
  if(digit.toString().length == 1){
    return "0"+digit.toString();
  }
  return digit;
}
function draw() {
  background(0);
  translate(width / 2, height / 2);
  rotate(-90);
  let date = new Date();
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  let mil = date.getMilliseconds();
  hr = hr + min / 60;
  min = min + sec / 60;
  sec = sec + mil / 1000;
  document.querySelector('.hr').textContent = formatter(parseInt(hr%12));
  document.querySelector('.min').textContent = formatter(parseInt(min));
  document.querySelector('.sec').textContent = formatter(parseInt(sec));
  noFill();
  let end1 = map(sec, 0, 60, 0, 360);
  let end2 = map(min, 0, 60, 0, 360);
  let end3 = map(hr % 12, 0, 12, 0, 360);
  strokeWeight(8);
  stroke(68,137,148);
  let x= (windowWidth - 100 >= 600)?600:windowWidth-100;
  arc(0, 0, x, x, 0, end1);
  stroke(255, 11, 11);
  arc(0, 0, x+20, x+20, 0, end2);
  stroke(255, 255, 255);
  arc(0, 0, x+40, x+40, 0, end3);
  fill(68,137,148);
  noStroke();
  circle(x/2*cos(end1),x/2*sin(end1),x/20);
  
}
