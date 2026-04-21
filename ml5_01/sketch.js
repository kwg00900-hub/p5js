let handPose;
let video;
let hands = [];

let board = ['', '', '', '', '', '', '', '', ''];
let boardSize;
let cellSize;
let offsetX, offsetY;
let winner = null;

let currentPlayer = 'X'; 
let selectionTimer = 0;
let lastSelectedCell = -1;
// 머무르는 시간 2배로 증가 (60프레임 = 약 1초)
const SELECT_THRESHOLD = 60; 

function preload() {
  handPose = ml5.handPose();
}

function setup() {
  createCanvas(640, 480);
  video = createCapture(VIDEO);
  video.size(640, 480);
  video.hide();
  handPose.detectStart(video, gotHands);
  
  boardSize = height * 0.8;
  cellSize = boardSize / 3;
  offsetX = (width - boardSize) / 2;
  offsetY = (height - boardSize) / 2;
  
  textAlign(CENTER, CENTER);
}

function draw() {
  push();
  translate(width, 0);
  scale(-1, 1);
  image(video, 0, 0, width, height);
  pop();

  drawBoard();
  displayStatus();

  if (winner) {
    displayWinner();
  } else {
    handleGameLogic();
  }
}

function drawBoard() {
  stroke(255);
  strokeWeight(4);
  noFill();
  
  for (let i = 0; i <= 3; i++) {
    line(offsetX + i * cellSize, offsetY, offsetX + i * cellSize, offsetY + boardSize);
    line(offsetX, offsetY + i * cellSize, offsetX + boardSize, offsetY + i * cellSize);
  }

  for (let i = 0; i < 9; i++) {
    let x = offsetX + (i % 3) * cellSize + cellSize / 2;
    let y = offsetY + floor(i / 3) * cellSize + cellSize / 2;
    textSize(boardSize / 5);
    if (board[i] === 'X') fill(100, 100, 255);
    else if (board[i] === 'O') fill(255, 100, 100);
    text(board[i], x, y);
  }
}

function displayStatus() {
  fill(255);
  noStroke();
  textSize(24);
  let msg = winner ? "게임 종료" : `현재 차례: ${currentPlayer}`;
  // 배경 박스를 살짝 그려서 텍스트를 더 잘 보이게 함
  fill(0, 150);
  rect(width/2 - 80, offsetY/2 - 20, 160, 40, 10);
  fill(255);
  text(msg, width / 2, offsetY / 2);
}

function handleGameLogic() {
  let currentTargetCell = -1;

  if (hands.length > 0) {
    let hand = hands[0]; 
    let indexTip = hand.keypoints[8]; 
    let screenX = width - indexTip.x; 
    let screenY = indexTip.y;

    fill(currentPlayer === 'X' ? color(0, 0, 255) : color(255, 0, 0));
    noStroke();
    circle(screenX, screenY, 25);

    if (screenX > offsetX && screenX < offsetX + boardSize &&
        screenY > offsetY && screenY < offsetY + boardSize) {
      
      let col = floor((screenX - offsetX) / cellSize);
      let row = floor((screenY - offsetY) / cellSize);
      let cellIdx = col + row * 3;

      if (board[cellIdx] === '') {
        currentTargetCell = cellIdx;
        
        if (currentTargetCell === lastSelectedCell) {
          selectionTimer++;
          // 게이지 시각화
          noFill();
          stroke(255, 255, 0);
          strokeWeight(6);
          // 머무르는 시간에 따라 원이 그려짐
          arc(screenX, screenY, 50, 50, 0, map(selectionTimer, 0, SELECT_THRESHOLD, 0, TWO_PI));
        } else {
          selectionTimer = 0;
        }

        if (selectionTimer > SELECT_THRESHOLD) {
          board[cellIdx] = currentPlayer; 
          selectionTimer = 0;
          checkWinner();
          
          if (!winner) {
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
          }
        }
      }
    }
  }
  lastSelectedCell = currentTargetCell;
}

function checkWinner() {
  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  for (let l of lines) {
    if (board[l[0]] !== '' && board[l[0]] === board[l[1]] && board[l[0]] === board[l[2]]) {
      winner = board[l[0]] + " 승리!";
      return;
    }
  }
  if (!board.includes('')) winner = "무승부!";
}

function displayWinner() {
  fill(0, 0, 0, 200);
  rect(0, 0, width, height);
  fill(255);
  textSize(50);
  text(winner, width/2, height/2);
  textSize(20);
  text("화면을 클릭하여 다시 시작", width/2, height/2 + 60);
}

function mousePressed() {
  if (winner) {
    board = ['', '', '', '', '', '', '', '', ''];
    winner = null;
    currentPlayer = 'X';
    selectionTimer = 0;
  }
}

function gotHands(results) {
  hands = results;
}