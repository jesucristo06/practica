let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  total += precio;
  actualizarCarrito();
}

function eliminarDelCarrito(index) {
    total -= carrito[index].precio; // Subtract the item's price from the total
    carrito.splice(index, 1); // Remove the item from the cart
    actualizarCarrito();
}

function actualizarCarrito() {
    const lista = document.getElementById("lista-carrito");
    const totalSpan = document.getElementById("total");
    lista.innerHTML = "";
    carrito.forEach((item, index) => {
      const li = document.createElement("li");
      const span = document.createElement("span");
      span.textContent = `${item.nombre} - $${item.precio}`;
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Eliminar";
      deleteButton.onclick = () => eliminarDelCarrito(index);
      li.appendChild(span);
      li.appendChild(deleteButton);
      lista.appendChild(li);
    });
    totalSpan.textContent = total;
  }


document.getElementById("ver-carrito").addEventListener("click", () => {
    const carrito = document.getElementById("carrito");
    carrito.classList.toggle("mostrar"); 
  });
document.getElementById("ver-carrito").addEventListener("click", () => {
  document.getElementById("carrito").classList.toggle("oculto");
});

function scrollProductos(distance) {
    const productos = document.querySelector('.productos');
    productos.scrollBy({
        left: distance,
        behavior: 'smooth'
    });
}

function finalizarCompra() {
    if (carrito.length === 0) {
        alert("El carrito está vacío. Agrega productos antes de finalizar la compra.");
        return;
    }
    carrito = []; 
    total = 0;
    actualizarCarrito(); 
    alert("Compra realizada");
}


document.querySelector(".checkout-btn").addEventListener("click", finalizarCompra);

document.getElementById("register-form").addEventListener("submit", function (event) {
    event.preventDefault();     

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    
    console.log("Usuario registrado:", { username, email, password });

   
    alert("Registro exitoso. ¡Bienvenido, " + username + "!");

    
    window.location.href = "index.html";
});