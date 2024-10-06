const productos = ["Remera", "Pantalón", "Zapatillas", "Paleta"];
const precios = [15000, 25000, 150000, 300000];
let total = 0;

function agregarAlCarrito() {
  let seleccion = parseInt(prompt("Elige un producto:\n1. Remera - $15000\n2. Pantalón - $25000\n3. Zapatillas - $150000\n4. Paleta - $300000"));
  console.log(`Usuario seleccionó: ${seleccion}`);

  if (seleccion >= 1 && seleccion <= 4) {
    total += precios[seleccion - 1];
    console.log(`Producto agregado: ${productos[seleccion - 1]}, Precio: $${precios[seleccion - 1]}`);
    alert(`Agregaste ${productos[seleccion - 1]} a tu carrito. Precio: $${precios[seleccion - 1]}`);
  } else {
    alert("Selección no válida. Intenta nuevamente.");
    console.log("Selección no válida por parte del usuario.");
  }
}
let seguirComprando = true;

while (seguirComprando) {
  agregarAlCarrito();
  seguirComprando = confirm("¿Deseas agregar otro producto?");
  console.log(`Usuario decidió ${seguirComprando ? "seguir comprando" : "no seguir comprando"}.`);
}

alert(`El total de tu compra es: $${total}`);
console.log(`Total de la compra: $${total}`);
