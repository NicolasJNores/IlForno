const arrayProdcutos  =  [

{
id: "pizza-muzarella",
nombre: "Pizza Muzarella",
imagen: "./assets/pizza1.jpg",
ingredientes: {
    ingrediente1:"Muzzarella",
    ingrediente2:"Aceitunas negras"
},
precio: 1500,
},

{
id: "pizza-primavera",
nombre: "Pizza Primavera",
imagen: "./assets/pizza2.jpg",
ingredientes: {
    ingrediente1:"Muzzarella",
    ingrediente2:"Verduras"
},
precio: 1500,
},

{
    id: "pizza-albahaca",
    nombre: "Pizza Albahca",
    imagen: "./assets/pizza3.jpg",
    ingredientes: {
        ingrediente1:"Muzzarella",
        ingrediente2:"Albahaca"
    },
    precio: 1500,
}

];

const seccionProductos = document.querySelector("#seccion-productos");

function todosLosProductos(){
        arrayProdcutos.forEach(producto => {
        
            const div= document.createElement("div");
            div.classList.add("producto col-md-4");
            div.innerHTML = `

            <div class="row d-flex w-100">
            <div class="card" style="">
                        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
                        <div class="tarjeta__contenedora card-body">
                            <h3 class="producto-nombre card-title fs-1">${producto.nombre}</h3>
                            <p class="card-text fs-2"> Ingredientes:
                            <ul class="fs-2">
                                <li>- ${producto.ingrediente1}</li>
                                <li>- ${producto.ingrediente2}</li>
                            </ul>
                            </p>
                            <p>Precio: $ ${producto.precio}-</p>
                            <a href="#" class="agregar-producto btn btn-primary fs-2 id="${producto.id}">Agregar a tu pedido</a>
                        </div>
                    </div>
            <div>
            
            
            `;

            seccionProductos.append(div);
            })
            
    }
    todosLosProductos();

