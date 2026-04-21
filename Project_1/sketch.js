function setup() {
  createCanvas(400, 600);
}

function draw() {
  background("#ff7676");
  noStroke();
  
  fill("#f5a09e");
  rect(200-60, 300-65, 120, 130, 30);
  fill("#F16966");
  ellipse(200-35, 300+20, 15, 10);
  ellipse(200+35, 300+20, 15, 10);
  
  fill("White");
  circle(177, 300, 30);
  circle(223, 300, 30);
  fill("#3F1D00");
  circle(177, 300, 20);
  circle(223, 300, 20);
  fill("#5E2B00");
  circle(177, 300, 15);
  circle(223, 300, 15);
  fill("Black");
  circle(177, 300, 10);
  circle(223, 300, 10);
  fill("White");
  circle(177+2, 300-2, 2);
  circle(223+2, 300-2, 2);
  noFill();
  strokeWeight(2.5);
  stroke(0);
  arc(223, 300, 30, 30, radians(200), radians(315));
  arc(177, 300, 30, 30, radians(200), radians(315));
  
  noStroke();
  fill("#f39fa5");
  circle(268, 300, 40);
  circle(132, 300, 40);
  strokeWeight(3);
  stroke("Black");
  line(268-3, 300-3, 268+3, 300+3);
  line(268+3, 300-3, 268-3, 300+3);
  line(132-3, 300-3, 132+3, 300+3);
  line(132+3, 300-3, 132-3, 300+3);
  
  noFill();
  arc(200, 318, 12, 12, radians(0), radians(180));
  
  fill("Black");
  quad(223-6, 280-4, 223+8, 280-4, 223+8, 280, 223-8, 280);
  quad(177-8, 280-4, 177+8, 280-4, 177+6, 280, 177-8, 280);
  
  noStroke();
  fill("#873e23");
  rect(200-63, 300-66, 12, 50);
  rect(200+53, 300-66, 12, 50);
  rect(200-60, 300-70, 120, 40);
  arc(200+1, 300-65, 128, 50, PI, 0);
  
  stroke(0);
  noFill();
  strokeWeight(2);
  line(200-3, 300-5, 200+3, 300-5);
  circle(200-25, 300-2, 45);
  circle(200+25, 300-2, 45);
  
  noStroke();
  fill("#f5a09e");
  rect(200-10, 300+65, 20, 20);
  fill("#DA7875");
  rect(200-10, 300+65, 20, 5);
  
  fill("#f6bd19");
  circle(200, 600, 430);
  fill("#1853f5");
  quad(100, 450, 300, 450, 300, 600, 100, 600);
  quad(100, 450, 120, 450, 120, 400, 100, 400);
  quad(300, 450, 280, 450, 280, 400, 300, 400);
  fill("#ff5e5e");
  rect(0, 550, 400, 400);
  fill(119, 56, 49, 80);
  rect(0, 540, 400, 10);
  strokeWeight(10);
  stroke(0);
  point(110, 460);
  point(290, 460);
  noStroke();
  fill("#b3af8d");
  rect(190,0,20,80);
  fill("#FFB200");
  circle(200,145,40);
  noStroke();
  fill("#FFFAC9");
  arc(200,140,150,150,PI,0);
  fill(255,255,255,30);
  quad(400,600,0,600,180,145,220,145) ;
}