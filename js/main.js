document.addEventListener("DOMContentLoaded", () => {
    const productos = [
      { id: 1, nombre: "Producto 1", precio: 100 },
      { id: 2, nombre: "Producto 2", precio: 150 },
      { id: 3, nombre: "Producto 3", precio: 200 }
    ];
  
    const productosContainer = document.getElementById("productos-container");
    const carritoLista = document.getElementById("carrito-lista");
    const totalCompra = document.getElementById("total-compra");
    const vaciarCarritoBtn = document.getElementById("vaciar-carrito");
    const comprarBtn = document.getElementById("comprar-btn");
  
    let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  
    productos.forEach(producto => {
      const card = document.createElement("div");
      card.classList.add("producto-card");
      card.innerHTML = `
        <h3>${producto.nombre}</h3>
        <p>Precio: $${producto.precio}</p>
        <button onclick="agregarAlCarrito(${producto.id})">Agregar al Carrito</button>
      `;
      productosContainer.appendChild(card);
    });
  
    window.agregarAlCarrito = (id) => {
      const producto = productos.find(p => p.id === id);
      carrito.push(producto);
      actualizarCarrito();
    };
  
    function actualizarCarrito() {
      carritoLista.innerHTML = "";
      let total = 0;
  
      carrito.forEach((producto, index) => {
        const item = document.createElement("li");
        item.innerHTML = `
          ${producto.nombre} - $${producto.precio} 
          <button onclick="eliminarDelCarrito(${index})">Eliminar</button>
        `;
        carritoLista.appendChild(item);
        total += producto.precio;
      });
  
      totalCompra.textContent = total.toFixed(2);
      localStorage.setItem("carrito", JSON.stringify(carrito));
      document.getElementById("carrito-vacio").style.display = carrito.length ? "none" : "block";
    }
  
    window.eliminarDelCarrito = (index) => {
      carrito.splice(index, 1);
      actualizarCarrito();
    };
  
    vaciarCarritoBtn.addEventListener("click", () => {
      carrito = [];
      actualizarCarrito();
    });
  
    comprarBtn.addEventListener("click", () => {
        const mensajeCompra = document.getElementById("mensaje-compra");
      
        if (carrito.length > 0) {
          mensajeCompra.textContent = "¡Gracias por tu compra!";
          mensajeCompra.style.display = "block";
          carrito = [];
          localStorage.removeItem("carrito");
          actualizarCarrito();
        } else {
          mensajeCompra.textContent = "Tu carrito está vacío";
          mensajeCompra.style.display = "block";
        }
      });
      
  
    actualizarCarrito();
  });
  
