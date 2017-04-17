var titanicos;

function preload() {
  titanicos = loadTable("http://faco.cl/data/titanic.csv", "csv", "header");
}

function setup() {
  print(titanicos.getRowCount() + " filas en la tabla");
  print(titanicos.getColumnCount() + " columnas en la tabla");
  noLoop();
}
