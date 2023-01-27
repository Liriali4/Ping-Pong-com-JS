//variáveis da bolinha
let xbol = 300;
let ybol = 200;
let diametro= 25;
let raio = diametro / 2;

//velocidade da bolinha
let vxbol =6;
let vybol = 3;

//variáveis da raquete
let xrqt = 5;
let yrqt = 150;
let rqtComprimento = 10;
let rqtAltura = 90;

//variáveis da raquete oponene
let xrqtOP = 585;
let yrqtOP = 150;
let rqtOPComprimento = 10;
let rqtOPAltura = 90;
let vyOP;

let colidiu = false;

//placar do jogo
let meuspontos = 0;
let pontosDoOponente =0;

//sons do jogo
let ponto;
let raquetada;
let trilha;

function preload(){
  trilha = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}


function setup() {
  createCanvas(600, 400);
  trilha.loop();
}

function draw() {
  background(0);
  avatarB();
  movimentoB();
  colisao();
  avatarR(xrqt, yrqt);
  movimentoR();
  //colisaoR(xrqt , yrqt , yrqt);
  colisaoRbiblioteca(xrqt,yrqt,rqtComprimento,rqtAltura);
  colisaoRbiblioteca(xrqtOP,yrqtOP,rqtOPComprimento,rqtOPAltura);
  avatarR(xrqtOP, yrqtOP);
  movimentoROP();
  incluiplacar();
  marcaponto();
 
}

//avatar da bolinha
function avatarB(){
  circle(xbol, ybol, diametro)
}

// movimento da bolinnha
function movimentoB(){
  xbol+= vxbol
  ybol+= vybol 
}

//colisao da bolinha com as bordas
function colisao(){
  if (xbol + raio > width || xbol - raio < 0){
      vxbol *= -1;
    }
    if (ybol  + raio> height || ybol - raio < 0){
      vybol *= -1;
    }
}

//avatar da minha raquete
function avatarR(x, y){
  rect(x, y, rqtComprimento, rqtAltura);
}

//movimento da minha raquete com as teclas...
function movimentoR(){
  if (keyIsDown (UP_ARROW)){
    yrqt -= 10;
  }
    if (keyIsDown (DOWN_ARROW)){
    yrqt += 10;
  }
}

/*colisao da bolinha com a raquete
function colisaoR(x , y , z){
  if (xbol -raio < x + rqtComprimento && ybol - raio < y + rqtAltura && ybol - raio > z){
    vxbol *= -1;
  }
}*/


//colisao com as raquetes, biblioteca
function colisaoRbiblioteca(x,y,c,a){
  colidiu= collideRectCircle(x,y,c,a,xbol,ybol,raio);
  if(colidiu){
    vxbol *= -1;
    raquetada.play();
  }
}

//movimento da raquete oponente
function movimentoROP(){
if (keyIsDown (87)){
    yrqtOP -= 10;
  }
    if (keyIsDown (83)){
    yrqtOP += 10;
  }
}

//mostrar os pontos
function incluiplacar(){
  stroke(255);
  textAlign(CENTER);
  textSize(16);
  fill(color(255, 140, 200));
  rect(130, 10, 40, 20);
  fill(255);
  text(meuspontos, 150, 26);
  fill(color(255, 140, 200));
  rect(430, 10,40, 20);
  fill(255);
  text(pontosDoOponente, 450, 26);
}

//marcar os pontos
function marcaponto(){
  if (xbol > 583){
    meuspontos += 1;
    ponto.play();
  }
  if (xbol < 13){
    pontosDoOponente += 1;
    ponto.play();
  }
}




