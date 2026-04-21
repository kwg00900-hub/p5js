/*
 * 📌 ml5.js Depth-to-PinArt (High Density Version)
 * 핀 개수를 4배로 늘려 극강의 해상도를 구현했습니다.
 */

let depthEstimator;
let webcam;
let depthMap;

let videoWidth = 640;
let videoHeight = 480;

// 핀 개수를 4배로 늘리기 위해 gridSize를 10에서 5로 축소
let gridSize = 5; 

let sensitivitySlider;
let thresholdSlider;

function preload() {
  depthEstimator = ml5.depthEstimation();
}

function setup() {
  createCanvas(videoWidth, videoHeight);
  webcam = createCapture(VIDEO);
  webcam.size(videoWidth, videoHeight);
  webcam.hide();

  createP('<b>감지 거리 (Threshold):</b>');
  thresholdSlider = createSlider(0, 255, 130, 1);
  
  createP('<b>입체감 대비 (Contrast):</b>');
  sensitivitySlider = createSlider(1, 4, 2.5, 0.1); // 해상도가 높을 땐 대비가 높은 게 더 멋집니다.

  depthEstimator.estimateStart(webcam, gotResults);
}

function draw() {
  background(5); // 더 깊은 검은색 배경

  push();
  translate(width, 0);
  scale(-1, 1);

  if (depthMap && depthMap.image) {
    depthMap.image.loadPixels();

    // 촘촘해진 그리드로 루프 실행
    for (let y = 0; y < videoHeight; y += gridSize) {
      for (let x = 0; x < videoWidth; x += gridSize) {
        let index = (x + y * videoWidth) * 4;
        let depthValue = depthMap.image.pixels[index]; 

        let threshold = thresholdSlider.value();
        let contrastPower = sensitivitySlider.value();
        
        let normalized = 0;
        if (depthValue > threshold) {
          normalized = map(depthValue, threshold, 255, 0, 1);
          normalized = pow(normalized, contrastPower);
        }

        // 핀 크기가 작아졌으므로 gridSize에 맞춰 조정
        let pinSize = normalized * gridSize * 1.4;

        if (pinSize > 0.3) {
          // 촘촘한 버전에서는 하이라이트 계산을 간소화하여 성능 최적화
          drawDensePin(x, y, pinSize, normalized * 255);
        }
      }
    }
  }
  pop();

  drawScrews();
}

// 고밀도 환경을 위한 최적화된 핀 그리기
function drawDensePin(x, y, size, brightness) {
  push();
  translate(x, y);
  
  noStroke();
  // 메인 주황색 핀
  fill(255, 100, 0, brightness + 50);
  ellipse(0, 0, size, size);

  // 아주 작은 하이라이트 (밀도가 높으므로 작게 표현)
  if (size > 2) {
    fill(255, 220, 150, brightness + 100);
    ellipse(-size * 0.2, -size * 0.2, size * 0.4, size * 0.4);
  }
  pop();
}

function drawScrews() {
  let screwSize = 22;
  let gap = 20;
  let corners = [{x:gap, y:gap}, {x:width-gap, y:gap}, {x:gap, y:height-gap}, {x:width-gap, y:height-gap}];

  for (let c of corners) {
    push();
    translate(c.x, c.y);
    fill(120); stroke(40); strokeWeight(1);
    ellipse(0, 0, screwSize, screwSize);
    stroke(40); strokeWeight(2);
    line(-5, 0, 5, 0); line(0, -5, 0, 5);
    pop();
  }
}

function gotResults(result) {
  depthMap = result;
}