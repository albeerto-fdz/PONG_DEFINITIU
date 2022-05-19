let pilota1 = []
let jugador1 = []
let jugador2 = []
let marcador1 = []
let pausa = 1;
let color_pilota1 = document.getElementById("color_pilota");
let vel_pilota1 = document.getElementById("vel_pilota");
let nom_jugador1 = document.getElementById("nom_jugador1");
let nom_jugador2 = document.getElementById("nom_jugador2");
let hei_jugadors = document.getElementById("tamanyjugadors");
function setup() {
  const canvasDiv = document.getElementById("canvasContainer");
  let ampleCanvas = canvasDiv.offsetWidth;
  let altCanvas = canvasDiv.offsetHeight;
  let cnv = createCanvas(ampleCanvas, altCanvas);
  cnv.parent("canvasContainer");
  let enter_jugadors_hei = parseInt(hei_jugadors.value);
  pilota1 = new pilota(width/2, height/2, 40, vel_pilota1.value, 0, color_pilota1);
  jugador1 = new jugador(10, height/2 - enter_jugadors_hei/2, 25, enter_jugadors_hei, 4, 255, 0, 0, 87, 83, nom_jugador1.value);
  jugador2 = new jugador(width-35, height/2 - enter_jugadors_hei/2, 25, enter_jugadors_hei, 4, 0, 0, 255, 79, 76, nom_jugador2.value);
  marcador1 = new marcador(20, 30, 0, jugador1.nom);
  marcador2 = new marcador(width-70, 30, 0, jugador2.nom);
}

function draw() {
  background(0);
  pilota1.vel = vel_pilota1.value;
  pilota1.color = color_pilota1.value;
  marcador1.nom = nom_jugador1.value;
  marcador2.nom = nom_jugador2.value;
  jugador1.hei = parseInt(hei_jugadors.value);
  jugador2.hei = parseInt(hei_jugadors.value);

  pilota1.dibuixa();
  jugador1.dibuixa();
  jugador2.dibuixa();
  marcador1.dibuixa();
  marcador2.dibuixa();

  if(pausa === 1){
    text("PITJA 'SHIFT' PER JUGAR", width/2 - 60, 100);
   
  }else{
    text("PITJA 'SHIFT' PER PAUSA",width/2 - 60, 20 )

  pilota1.moviment();
  jugador1.moviment();
  jugador2.moviment();
}
}

function keyPressed(){
  if(keyCode === 16){
    pausa *= -1;
  }
}