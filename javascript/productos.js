const arrayProductos = [
    {
      id: "pizza-muzarella",
      nombre: "Pizza Muzarella",
      imagen: "../assets/pizza1.jpg",
      ingredientes: {
        ingrediente1: "Muzzarella",
        ingrediente2: "Aceitunas negras"
      },
      precio: 1500
    },
    {
      id: "pizza-primavera",
      nombre: "Pizza Primavera",
      imagen: "../assets/pizza2.jpg",
      ingredientes: {
        ingrediente1: "Muzzarella",
        ingrediente2: "Verduras"
      },
      precio: 1500
    },
    {
      id: "pizza-albahaca",
      nombre: "Pizza Albahca",
      imagen: "../assets/pizza3.jpg",
      ingredientes: {
        ingrediente1: "Muzzarella",
        ingrediente2: "Albahaca"
      },
      precio: 1500
    }
  ];
  
  const seccionProductos = document.querySelector(".seccion-productos");
  let agregarProductos;
  
  function todosLosProductos() {
    arrayProductos.forEach(producto => {
      const div = document.createElement("div");
      div.classList.add("col-md-4");
      div.innerHTML = `
        <div class="row d-flex w-100">
          <div class="card" style="">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="tarjeta__contenedora card-body">
              <h3 class="producto-nombre card-title fs-1">${producto.nombre}</h3>
              <p class="card-text fs-2"> Ingredientes:
                <ul class="fs-2">
                  <li>- ${producto.ingredientes.ingrediente1}</li>
                  <li>- ${producto.ingredientes.ingrediente2}</li>
                </ul>
              </p>
              <p>Precio: $ ${producto.precio},00.-</p>
              <a href="#" class="agregar-producto btn btn-primary fs-2" id="${producto.id}">Agregar a tu pedido</a>
            </div>
          </div>
        </div>
      `;
      seccionProductos.append(div);
    });
  
    cargarBotones();
  }
  
  todosLosProductos();
  
  function cargarBotones() {
    agregarProductos = document.querySelectorAll(".agregar-producto");
    agregarProductos.forEach(boton => {
      boton.addEventListener("click", agregarAlPedido);
    });
  }
  let productosEnCarrito;
  const productosEnCarritoLS = JSON.parse(localStorage.getItem("articulos-en-pedido"));
  if(productosEnCarritoLS){
    productosEnCarrito = productosEnCarritoLS;
  } else{
    const productosEnCarrito = [];
  }
  
  
  function agregarAlPedido(e) {
    e.preventDefault();
    const idBoton = e.currentTarget.id;
    const productoAgregado = arrayProductos.find(producto => producto.id === idBoton);
  
    
    if(productosEnCarrito.some(producto => producto.id === idBoton)){
        const index = productosEnCarrito.findIndex(producto => producto.id === idBoton)
        productosEnCarrito[index].cantidad++;   
    } else{
        productoAgregado.cantidad = 1;
        productosEnCarrito.push(productoAgregado);
    }

    localStorage.setItem("articulos-en-pedido", JSON.stringify(productosEnCarrito));
    
  }
  