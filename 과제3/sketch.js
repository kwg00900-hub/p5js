/*********************************************
  1. mouse:
		- 마우스 포인터를 따라 전등이 가로로 움직임.
        - 마우스 좌클릭 시 눈썹이 위로 올라감.
	2. keyboard:
		- 키보드의 Q(q)키를 누르면 왼쪽 눈이 감김.
        - 키보드의 E(e)키를 누르면 왼쪽 눈이 감김.
        - 키보드의 W(w)를 누르면 입을 벌림.
        - 키보드의 스페이스 바를 누르면 목이 늘어나고 떼면 돌아옴.
***********************************************/	

let baseVar = 300;

function setup() {
  createCanvas(400, 600);
}

//목 늘리기
function draw() {
  
  let lightX = constrain(mouseX, 75, 325);
  
  if (keyIsDown(32)) {
    if (baseVar > 100) { 
      baseVar -= 2;
    }
  } 
  else {
    if (baseVar < 300) {
      baseVar += 10;

      if (baseVar > 300) {
        baseVar = 300;
      }
    }
  }
  background("#ff7676");
  noStroke();
  
  //얼굴
  fill("#f5a09e");
  rect(200-60, baseVar-65, 120, 130, 30);
  fill("#F16966");
  ellipse(200-35, baseVar+20, 15, 10);
  ellipse(200+35, baseVar+20, 15, 10);
  
  //눈
  fill("White");
  circle(177, baseVar, 30);
  circle(223, baseVar, 30);
  
  //눈동자
  fill("#3F1D00");
  circle(177, baseVar, 20);
  circle(223, baseVar, 20);
  fill("#5E2B00");
  circle(177, baseVar, 15);
  circle(223, baseVar, 15);
  fill("Black");
  circle(177, baseVar, 10);
  circle(223, baseVar, 10);
  fill("White");
  circle(177+2, baseVar-2, 2);
  circle(223+2, baseVar-2, 2);
  
  //속눈썹
  noFill();
  strokeWeight(2.5);
  stroke(0);
  arc(223, baseVar, 30, 30, radians(200), radians(315));
  arc(177, baseVar, 30, 30, radians(200), radians(315));
  
  //감은 눈(왼)
  if (keyIsDown(81)) {
      noStroke();
      fill("#f5a09e");
      circle(177, baseVar, 33.5);
      stroke(0);
      line(185, baseVar-2, 167, baseVar-6);
      line(185, baseVar-2, 167, baseVar+1);
  }
  
  //감은 눈(오)
  if (keyIsDown(69)) {
      noStroke();
      fill("#f5a09e");
      circle(223, baseVar, 33.5);
      stroke(0);
      line(215, baseVar-2, 233, baseVar-6);
      line(215, baseVar-2, 233, baseVar+1);
  }
  
  //귀
  noStroke();
  fill("#f39fa5");
  circle(268, baseVar, 40);
  circle(132, baseVar, 40);
  strokeWeight(3);
  stroke("Black");
  line(268-3, baseVar-3, 268+3, baseVar+3);
  line(268+3, baseVar-3, 268-3, baseVar+3);
  line(132-3, baseVar-3, 132+3, baseVar+3);
  line(132+3, baseVar-3, 132-3, baseVar+3);
  
  //입
  noFill();
  arc(200, baseVar+18, 12, 12, radians(0), radians(180));
  
  //벌린 입
  if (keyIsDown(87)) {
      strokeWeight(3);
      fill("#f9c6c5");
      circle(200, baseVar+20, 14); 
  }
  
  //눈썹
  fill("Black");
  quad(215, baseVar-24, 231, baseVar-24, 231, baseVar-20, 215, baseVar-20);
  quad(169, baseVar-24, 185, baseVar-24, 185, baseVar-20, 169, baseVar-20);
  
  //올라간 눈썹
  if (mouseIsPressed){
    noStroke();
    fill("#f5a09e");
    rect(163, baseVar-26, 73, 8);
    fill("Black");
    stroke(0);
    strokeWeight(3);
    quad(215, baseVar-30, 231, baseVar-30, 231, baseVar-26, 215, baseVar-26);
    quad(169, baseVar-30, 185, baseVar-30, 185, baseVar-26, 169, baseVar-26);
  }
  
  //머리카락
  noStroke();
  fill("#873e23");
  rect(200-63, baseVar-66, 12, 50);
  rect(200+53, baseVar-66, 12, 50);
  rect(200-60, baseVar-70, 120, 40);
  arc(200+1, baseVar-65, 128, 50, PI, 0);
  
  //안경
  stroke(0);
  noFill();
  strokeWeight(2);
  line(200-3, baseVar-5, 200+3, baseVar-5);
  circle(200-25, baseVar-2, 45);
  circle(200+25, baseVar-2, 45);
  
  //목
  noStroke();
  fill("#f5a09e");
  rect(200-10, baseVar+65, 20, 400);
  
  //목 그림자
  fill("#DA7875");
  rect(200-10, baseVar+65, 20, 5);
  
  //HI.
  stroke(0);
  strokeWeight(2);
  line(197, baseVar + 165, 203, baseVar + 165);
  line(197, baseVar + 171, 197, baseVar + 159);
  line(203, baseVar + 171, 203, baseVar + 159);
  line(197, baseVar + 180, 203, baseVar + 180);
  line(197, baseVar + 192, 203, baseVar + 192);
  line(200, baseVar + 180, 200, baseVar + 192); 
  
  //몸
  noStroke();
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
  
  //전등
  noStroke();
  fill("#b3af8d");
  rect(lightX - 10, 0, 20, 80); 
  fill("#FFB200");
  circle(lightX, 145, 40);
  fill("#FFFAC9");
  arc(lightX, 140, 150, 150, PI, 0);
  fill(255, 255, 255, 30);
  quad(400, 600, 0, 600, lightX - 20, 145, lightX + 20, 145);
}

function keyPressed() {
  if (key === 's') {
    saveGif('mySketch', 10);
  }
}