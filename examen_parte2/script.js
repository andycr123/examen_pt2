//Prodcutos
const muebles = [
  {
    nombre: "Muebles de sala de estar",
    precio: "20.000.000",
    moneda: "COP",
    imagen: "/assets/mueble-verde.png",
  },
  {
    nombre: "Mueble de la habitación",
    precio: "30.000.000",
    moneda: "COP",
    imagen: "/assets/mueble-verde.png",
  },
  {
    nombre: "Muebles de la alcoba",
    precio: "10.000.000",
    moneda: "COP",
    imagen: "/assets/mueble-verde.png",
  },
  {
    nombre: "Muebles de la cocina",
    precio: "5.000.000",
    moneda: "COP",
    imagen: "/assets/mueble-verde.png",
  },
  {
    nombre: "Sillon multifuncional",
    precio: "34.000.000",
    moneda: "COP",
    imagen: "/assets/mueble-verde.png",
  },
  {
    nombre: "Kit sala comedor ",
    precio: "67.000.000",
    moneda: "COP",
    imagen: "/assets/mueble-verde.png",
  },
  {
    nombre: "Mesa para la sala de estar",
    precio: "1.000.000",
    moneda: "COP",
    imagen: "/assets/mueble-verde.png",
  },
];

//Agregar productos al contenedor
const contenedor_de_productos = document.querySelector(".productos");
muebles.forEach((item) => {
  contenedor_de_productos.innerHTML += `
  <article>
    <img src="${item.imagen}" alt="${item.nombre}" />
    <div class="info" >
    <h4>${item.nombre}</h4>
    <h3>${item.moneda} ${item.precio}</h3>
    <div class="button" >
      <button class="añadir" >Añadir</button>
    </div>
    </div>
  </article>`;
});


// Array del carrito
const carrito = [];


// Examen parte 2.

// Un ecomerce (FurniPro) quiere poder ingresar sus productos en un carrito de compras
// y estilizar esos productos dentro del carrito de compras. se tomará en cuenta los siguientes puntos:
// 1. Desarrollar la funcionalidad de agregar productos a un carrito de compras (array = carrito)
//     y mostrarlo en el lugar designado para el carrito en la pagina.
// 2.  Desarrollar la funcionalidad evaluar el precio total del carrito de compras y mostrarlo en "Total" 
//     del lugar designado en el carrito.
// 3. Al agregar un producto al carrito, si este ya poseé ese producto le sume el "stock" en vez de crear otro
//     producto al carrito.

// ¡Buena suerte a todos


//Codigo aqui ---------------------------------------------------  -->


/* Inicio de mi nerfeo  */ 
function addToCart(nombre, precio) {
  const existingProduct = carrito.find(item => item.nombre === nombre);
  
  if (existingProduct) {
    existingProduct.cantidad++;
  } else {
    carrito.push({ nombre, precio, cantidad: 1 });
  }

  renderCart();
}

// Función para renderizar el carrito
function renderCart() {
  const cartSection = document.querySelector(".carrito section");
  const totalElement = document.querySelector("#total");
  let totalPrice = 0;

  cartSection.innerHTML = "";

  carrito.forEach(item => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");
    cartItem.innerHTML = `
      <p>${item.nombre} x ${item.cantidad}</p>
      <p>${item.moneda} ${item.precio * item.cantidad}</p>
    `;
    cartSection.appendChild(cartItem);

    totalPrice += item.precio * item.cantidad;
  });

  totalElement.textContent = `${totalPrice} COP`;
}


function mostrarProductos() {
  const contenedor_de_productos = document.querySelector(".productos");
  muebles.forEach((item) => {
    contenedor_de_productos.innerHTML += `
      <article>
        <img src="${item.imagen}" alt="${item.nombre}" />
        <div class="info">
          <h4>${item.nombre}</h4>
          <h3>${item.moneda} ${item.precio}</h3>
          <div class="button">
            <button class="añadir" onclick="addToCart('${item.nombre}', ${item.precio})">Añadir</button>
          </div>
        </div>
      </article>`;
  });
}


document.addEventListener("DOMContentLoaded", function() {
  mostrarProductos();
});
/* Fin de esta monda che me asare */