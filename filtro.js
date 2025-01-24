// Tenemos un li de productos

const productos = [
  {nombre: "Zapato negro", tipo: "zapato", color: "negro", img: "./taco-negro.jpg"},
  {nombre: "Zapato azul", tipo: "zapato", color: "azul", img: "./taco-azul.jpg"},
  {nombre: "Bota negra", tipo: "bota", color: "negro", img: "./bota-negra.jpg"},
  {nombre: "Bota azul", tipo: "bota", color: "azul", img: "./bota-azul.jpg"},
  {nombre: "Zapato rojo", tipo: "zapato", color: "rojo", img: "./zapato-rojo.jpg"}
]

const listaProductos = document.getElementById("lista-de-productos");
const inputFiltro = document.querySelector('input[type="text"]');

function agregarProducto(prod, contenedor) {
  const d = document.createElement("div");
  d.classList.add("producto");

  const ti = document.createElement("p");
  ti.textContent = prod.nombre;
  
  const imagen = document.createElement("img");
  imagen.setAttribute('src', prod.img);

  d.appendChild(ti);
  d.appendChild(imagen);

  contenedor.appendChild(d);
}

productos.forEach(producto => agregarProducto(producto, listaProductos));

const botonDeFiltro = document.querySelector("button");

botonDeFiltro.onclick = function() {
  while (listaProductos.firstChild) {
    listaProductos.removeChild(listaProductos.firstChild);
  }

  const texto = inputFiltro.value.toLowerCase();
  console.log(texto); 
  const productosFiltrados = filtrado(productos, texto);
  productosFiltrados.forEach(producto => agregarProducto(producto, listaProductos));
}

  for (let i = 0; i < productosFiltrados.length; i++) {
    var d = document.createElement("div")
    d.classList.add("producto")
  
    var ti = document.createElement("p")
    ti.classList.add("titulo")
    ti.textContent = productosFiltrados[i].nombre
    
    var imagen = document.createElement("img");
    imagen.setAttribute('src', productosFiltrados[i].img);
  
    d.appendChild(ti)
    d.appendChild(imagen)
  
    li.appendChild(d)
  }

  const filtrado = (productos = [], texto) => {
    return productos.filter(item => 
      item.tipo.includes(texto) || item.color.includes(texto)
    );
  }