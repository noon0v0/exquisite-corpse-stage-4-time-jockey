let gameState = 'start';
let storyText = '';
let buttons = [];

let finalBtn = [
  { text: 'Go to the hill', action: () => { gameState = 'hill'; } },
  { text: 'Go to the riverside', action: () => { gameState = 'riverside'; } },
  { text: 'Go to the forest', action: () => { gameState = 'forest'; } }
]

let reStartBtn = [
  { text: 'Restart', action: () => { gameState = 'start'; } }
]

let gameStateSet = ["start", "fork1", "bush", "footprints", "mountain", "hill", "riverside", "forest"];
let sceneDict = {}

function preload() {
  for(let i = 0; i<gameStateSet.length; i++){
    sceneDict[gameStateSet[i]] = loadImage("images/" + gameStateSet[i] + ".png");
  }
}

function setup() {
    createCanvas(800, 800);
    textSize(18);
    textAlign(CENTER, CENTER);
}

function draw() {
    background(255);
    fill(0);
    image(sceneDict[gameState], 0, 0);
    text(storyText, 0, -height/4, width, height);

    if (gameState === 'start') {
        storyText = 'You wake up to find yourself in an unfamiliar forest. \n Surrounded by dense trees, you try to recall how you arrived here, \n but your memory is hazy. \n You decide to start looking for a way home.';
        buttons = [{ text: 'Start exploring', action: () => { gameState = 'fork1'; } }];
    } else if (gameState === 'fork1') {
        storyText = 'You come to a fork in the road with three paths to choose from: \n the path on the left leads to a dense thicket of bushes, the middle path has animal footprints, and the right path leads up a mountain.';
        buttons = [
            { text: 'Explore the bushes', action: () => { gameState = 'bush'; } },
            { text: 'follow the footprints', action: () => { gameState = 'footprints'; } },
            { text: 'climb the mountain', action: () => { gameState = 'mountain'; } }
        ];
    } 
    if (gameState == 'bush') {
      storyText = "You decide to take the left path. There is a narrow trail in the thicket of bushes, and you follow it forward, hoping to find a clue. You discover a set of footprints that seem to be human, and you decide to follow them.\n ";
      storyText += "You continue to move forward and eventually arrive at an open area, where you see three paths: \n one leading to the mountainous area, one leading to the riverbank, and one leading to a dense forest.";
      buttons = finalBtn;
    } else if (gameState == "footprints"){
      storyText = "You decide to take the middle path. There are fresh animal footprints on the path, and you carefully follow them forward. Suddenly, you see a wolf hunting, and you find a cave where you hide until the wolf leaves. \n ";
      storyText += "You continue to move forward and eventually arrive at an open area, where you see three paths: \n one leading to the mountainous area, one leading to the riverbank, and one leading to a dense forest.";
      buttons = finalBtn;
    } else if (gameState == "mountain"){
      storyText = "You decide to take the right path. The hill is not very high, but from the top, you can overlook the forest, hoping to find a way out. From the summit, you see a village in the distance and find a path leading down the mountain.\n ";
      storyText += "You continue to move forward and eventually arrive at an open area, where you see three paths: \n one leading to the mountainous area, one leading to the riverbank, and one leading to a dense forest.";
      buttons = finalBtn;
    } 

    if (gameState == 'hill') {
      storyText = "You follow the path leading to the mountainous area and eventually find a trail that leads you out of the forest and back home.";
      buttons = reStartBtn;
    } else if (gameState == "riverside"){
      storyText = "You walk along the riverbank and discover a small boat. You decide to row downstream with the current and eventually return home.";
      buttons = reStartBtn;
    } else if (gameState == "forest"){
      storyText = "You become lost in the forest and are unable to find your way home.";
      buttons = reStartBtn;
    } 



    let yOffset = height - 200;
    for (let btn of buttons) {
        fill(255);
        rect(width / 2 - 100, yOffset, 200, 40);
        fill(0);
        text(btn.text, width / 2, yOffset + 20);
        yOffset += 50;
    }
}

function mouseClicked() {
    let yOffset = height - 200;
    for (let i = 0; i < buttons.length; i++) {
        if (mouseX > width / 2 - 100 && mouseX < width / 2 + 100 && mouseY > yOffset && mouseY < yOffset + 40) {
            buttons[i].action();
        }
        yOffset += 50;
    }
}
