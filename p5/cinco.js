var titanicos;

function preload() {
  titanicos = loadTable("https://raw.githubusercontent.com/rociormp/clase_17abril/master/Titanic_Passengers.csv", "csv", true);
}


function setup() {
  var miCanvas = createCanvas(windowWidth, 400);
 miCanvas.parent('miContenedor');

   for (var i = 0; i < titanicos.getRowCount(); i++) {
      var nombre = titanicos.get(i, 4);
      var clase = titanicos.get(i, 2);
      print("Pasajero " + nombre + ", clase " +clase);
   }

}

  function draw() {
    background(250);
    rectMode(CENTER);
  var nombre = titanicos.get(i, 4);
  textAlign(LEFT);
  textSize(20);
    text(titanicos.get(nombre,1),((width/30)-10),50);
    fill(0);
    }
