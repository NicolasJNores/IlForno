document.addEventListener("DOMContentLoaded", function() {
  const productosEnCarrito = JSON.parse(localStorage.getItem("articulos-en-pedido"));

  const parrafoCarritoVacio = document.querySelector("#carrito-vacio");
  const tuPedido = document.querySelector("#carrito-lista-productos");
  const listaProductos = document.querySelector("#producto-en-lista");
  const resumenCarrito = document.querySelector("#resumen-carrito");

  if (productosEnCarrito && productosEnCarrito.length > 0) {

    parrafoCarritoVacio.style.display = "none";
    listaProductos.style.display = "block";
    tuPedido.style.display = "block";
    resumenCarrito.style.display = "block";



    productosEnCarrito.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("producto-en-lista", "row", "mb-4", "d-flex", "justify-content-between", "align-items-center");
      div.innerHTML = `
        <div class="col-md-2 col-lg-2 col-xl-2">
          <img src="${producto.imagen}" class="img-fluid rounded-3" alt="${producto.nombre}" />
        </div>
        <div class="col-md-3 col-lg-3 col-xl-3">
          <h6 class="text-muted">Articulo</h6>
          <h6 class="text-black mb-0">${producto.nombre}</h6>
        </div>
        <div class="col-md-3 col-lg-3 col-xl-2 p-2 d-flex align-items-center">
          <button class="btn btn-link px-2 m-1 btn-decrementar">
            <i class="fas fa-minus"></i>
          </button>
          <input min="0" name="quantity" value="${producto.cantidad}" type="number" class="form-control form-control-sm px-4 input-cantidad" />
          <button class="btn btn-link px-2 m-1 btn-incrementar">
            <i class="fas fa-plus"></i>
          </button>
        </div>
        <div class="col-md-3 col-lg-2 col-xl-2 offset-lg-1">
          <small>Precio: </small>
          <h6 class="mb-0 precio-producto">$ ${producto.precio * producto.cantidad}</h6>
        </div>
        <div class="col-md-1 col-lg-1 col-xl-1 text-end">
          <a href="#!" class="text-muted btn-eliminar-producto"><i class="fas fa-times"></i></a>
        </div>
        <hr class="my-4" />
      `;

      const inputCantidad = div.querySelector('.input-cantidad');
      const btnIncrementar = div.querySelector('.btn-incrementar');
      const btnDecrementar = div.querySelector('.btn-decrementar');
      const btnEliminar = div.querySelector('.btn-eliminar-producto');
      const precioProducto = div.querySelector('.precio-producto');

      btnIncrementar.addEventListener('click', function() {

        const cantidad = parseInt(inputCantidad.value);
        inputCantidad.value = cantidad + 1;
        producto.cantidad = cantidad + 1;
        precioProducto.textContent = `$ ${producto.precio * producto.cantidad}`;
        guardarCarritoEnLocalStorage(productosEnCarrito);

      });

      btnDecrementar.addEventListener('click', function() {
        const cantidad = parseInt(inputCantidad.value);
        
        if (cantidad > 1) {

          inputCantidad.value = cantidad - 1;
          producto.cantidad = cantidad - 1;
          precioProducto.textContent = `$ ${producto.precio * producto.cantidad}`;
          guardarCarritoEnLocalStorage(productosEnCarrito);
        }
      });

      btnEliminar.addEventListener('click', function() {
        const index = productosEnCarrito.findIndex(item => item.id === producto.id);
        
        if (index > -1) {

          productosEnCarrito.splice(index, 1);
          div.remove();
          guardarCarritoEnLocalStorage(productosEnCarrito);
          
          if (productosEnCarrito.length === 0) {

            parrafoCarritoVacio.style.display = "block";
            listaProductos.style.display = "none";
            tuPedido.style.display = "none";
            resumenCarrito.style.display = "none";
          }
        }
      });

      listaProductos.appendChild(div);
    });
  }

  function guardarCarritoEnLocalStorage(productos) {
    localStorage.setItem("articulos-en-pedido", JSON.stringify(productos));
  }
});

const finalizar = document.querySelector("#finalizar");
finalizar.addEventListener("click", function(){

  Swal.fire({
    icon: 'success',
    title: 'Excelente!',
    text: 'Realizaste tu Pedido!',
    footer: '<a href="">Asistencia con tu pedido</a>'
  });

});