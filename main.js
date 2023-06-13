const listadoProductos = 'json/productos.json';
const contenedorProductos = document.getElementById('mostramosProductos');

fetch(listadoProductos)
  .then((respuesta) => respuesta.json())
  .then((datos) => {
    console.log(datos);
    mostrarProductos(datos);
  })
  .catch((error) => console.log(error));

//Creamos una función que se llame "mostrarProductos" y que reciba como parámetro "datos"

function mostrarProductos(productos) {
  productos.forEach((producto) => {
    const cardBs = document.createElement('div');
    cardBs.classList.add('col-xl-3', 'col-md-6');
    cardBs.innerHTML = `<div class="card cardProductos">
                    <img src= ${producto.img} alt= ${producto.nombre}>
                    <div class="card-body">
                    <h2 class="card-title">${producto.nombre}</h2>
                    <p class="card-text">${producto.descripcion} </p>
                    <p class="card-text">$ ${producto.precio} </p></div>
                    <button class="btn btn-dark buttonCard" id = "boton${producto.id}">Añadir al Carrito</button>
                    </div>`;

    contenedorProductos.appendChild(cardBs);

    const boton = document.getElementById(`boton${producto.id}`);
    boton.addEventListener('click', () => {
      agregarAlCarrito(producto.id, productos);
    });
  });
}

const carrito = [];

const agregarAlCarrito = (id, productos) => {
    const producto = productos.find((producto) => producto.id === id);
    carrito.push(producto);
    localStorage.setItem("carrito", JSON.stringify(carrito));
    console.log(carrito);
  };