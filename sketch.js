function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}


```javascript

let player;

let items = [];

let score = 0;

function setup() {

  createCanvas(800, 400);

  

  // Cria o jogador

  player = new Player();

  

  // Cria alguns itens

  for (let i = 0; i < 10; i++) {

    items.push(new Item(random(width), random(height)));

  }

}

function draw() {

  background(135, 206, 235); // Céu azul

  

  // Desenha o campo (parte inferior)

  fill(34, 139, 34); // Verde

  rect(0, height / 2, width, height / 2);

  

  // Desenha a cidade (parte superior)

  fill(200);

  rect(0, 0, width, height / 2);

  

  player.show();

  

  for (let item of items) {

    item.show();

    if (player.collect(item)) {

      score++;

      item.respawn();

    }

  }

  

  fill(0);

  textSize(24);

  text("Pontos: " + score, 10, height - 10);

}

function keyPressed() {

 if (keyCode === LEFT_ARROW) {

   player.move(-5, 0);

 } else if (keyCode === RIGHT_ARROW) {

   player.move(5, 0);

 } else if (keyCode === UP_ARROW) {

   player.move(0, -5);

 } else if (keyCode === DOWN_ARROW) {

   player.move(0, 5);

 }

}

class Player {

 constructor() {

   this.x = width / 2;

   this.y = height / 2;

   this.size = 20;

 }

 show() {

   fill(255, 0, 0); // Jogador vermelho

   ellipse(this.x, this.y, this.size);

 }

 move(x, y) {

   this.x += x;

   this.y += y;

   this.x = constrain(this.x, this.size / 2, width - this.size / 2);

   this.y = constrain(this.y, this.size / 2, height - this.size / 2);

 }

 collect(item) {

   let d = dist(this.x, this.y, item.x, item.y);

   return d < (this.size + item.size) / 2;

 }

}

class Item {

 constructor(x, y) {

   this.x = x;

   this.y = y;

   this.size = 15;

 }

 show() {

   fill(255,215,0); // Item amarelo

   ellipse(this.x, this.y, this.size);

 }

 respawn() {

   this.x = random(width);

   this.y = random(height / 2); // Itens aparecem apenas na cidade

 }

}

``