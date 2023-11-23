let song;
let amp;
let volHistory = [];

function preload() {
  song = loadSound('https://cdn.discordapp.com/attachments/981608347688116284/1176946574425870376/Heartless_130bpm_master.wav');
}

function setup() {
  createCanvas(200, 200, WEBGL);
  angleMode(DEGREES);
  amp = new p5.Amplitude();
  song.play();
}

function draw() {
  background(0);
  let vol = amp.getLevel();
  volHistory.push(vol);
  stroke(255);
  noFill();

  translate(0, 0, -600);
  beginShape();
  for (let i = 0; i < 360; i++) {
    let r = map(volHistory[i], 0, 1, 10, 100);
    let x = r * cos(i);
    let y = r * sin(i);
    vertex(x, y, -volHistory[i]*200);
  }
  endShape();

  if (volHistory.length > 360) {
    volHistory.splice(0, 1);
  }
}