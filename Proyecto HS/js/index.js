document.addEventListener('DOMContentLoaded', () => {

// Variables
const data = [
    {
        id: 1,
        nombre: 'Zapatillas Vans rojas hombre',
        precio: 60000,
        descripcion: 'Zapatillas Vans rojas hombre',
        imagen: 'img/ph13.jpg'
    },
    {
        id: 2,
        nombre: 'Zapatillas Vans celestes hombre',
        precio: 60000,
        descripcion: 'Zapatillas Van celestes hombre',
        imagen: 'img/ph14.jpg'
    },
    {
        id: 3,
        nombre: 'Zapatillas Cat marrones hombre',
        precio: 75000,
        descripcion: 'Zapatillas Cat marrones hombre',
        imagen: 'img/ph15.jpg'
    },
    {
        id: 4,
        nombre: 'Botitas Vans celestes hombre',
        precio: 80000,
        descripcion: 'Botitas Vans celestes hombre',
        imagen: 'img/ph16.jpg'
    },
    {
        id: 5,
        nombre: 'Zapatillas HP rojas hombre',
        precio: 65000,
        descripcion: 'Zapatillas HP rojas hombre',
        imagen: 'img/ph17.jpg'
    },
    {
        id: 6,
        nombre: 'Zapatillas negras básicas hombre',
        precio: 40000,
        descripcion: 'Zapatillas negras básicas hombre',
        imagen: 'img/ph18.jpg'
    },
    {
        id: 7,
        nombre: 'Zapatillas Asics blancas mujer',
        precio: 40000,
        descripcion: 'Zapatillas Asics blancas mujer',
        imagen: 'img/pm13.jpg'
    },
    {
        id: 8,
        nombre: 'Zapatillas HP Gold mujer',
        precio: 50000,
        descripcion: 'Zapatillas HP Gold mujer',
        imagen: 'img/pm14.jpg'
    },
    {
        id: 9,
        nombre: 'Zapatillas Vans rosa oscuro mujer',
        precio: 50000,
        descripcion: 'Zapatillas Vans rosa oscuro mujer',
        imagen: 'img/pm15.jpg'
    },
    {
        id: 10,
        nombre: 'Botitas Asics beige mujer',
        precio: 60000,
        descripcion: 'Botitas Asics beige mujer',
        imagen: 'img/pm16.jpg'
    },
    {
        id: 11,
        nombre: 'Zapatillas Vans rosas mujer',
        precio: 50000,
        descripcion: 'Zapatillas Vans rosas mujer',
        imagen: 'img/pm17.jpg'
    },
    {
        id: 12,
        nombre: 'Zapatillas Nike Rainbow mujer',
        precio: 55000,
        descripcion: 'Zapatillas Nike Rainbow mujer',
        imagen: 'img/pm18.jpg'
    },
    {
        id: 13,
        nombre: 'Zapatillas Cat azul hombre',
        precio: 50000,
        descripcion: 'Zapatillas Cat azul hombre',
        imagen: 'img/ph21.jpg'
    },
    {
        id: 14,
        nombre: 'Zapatillas lona celeste hombre',
        precio: 40000,
        descripcion: 'Zapatillas lona celeste hombre',
        imagen: 'img/ph22.jpg'
    },
    {
        id: 15,
        nombre: 'Zapatillas lona gris hombre',
        precio: 40000,
        descripcion: 'Zapatillas lona gris hombre',
        imagen: 'img/ph23.jpg'
    }
];

let carrito = [];
        const divisa = '$';
        const DOMitems = document.querySelector('#items');
        const DOMcarrito = document.querySelector('#carrito');
        const DOMtotal = document.querySelector('#total');
        const DOMbotonVaciar = document.querySelector('#boton-vaciar');
        const miLocalStorage = window.localStorage;

// Dibujamos todos los productos a partir de la base de datos json
function renderizarProductos() {
    fetch("./db/data.json")
    .then(response=>response.json())
    .then(data=> {
        data.forEach((info) => {
            // Card
            const miNodo = document.createElement('div');
            miNodo.classList.add('card', 'col-sm-3');
            // Body de la card
            const miNodoCardBody = document.createElement('div');
            miNodoCardBody.classList.add('card-body');
            // Nombre del producto
            const miNodoTitle = document.createElement('h5');
            miNodoTitle.classList.add('card-title');
            miNodoTitle.textContent = info.nombre;
            // Imagen del producto
            const miNodoImagen = document.createElement('img');
            miNodoImagen.classList.add('img-fluid');
            miNodoImagen.setAttribute('src', info.imagen);
            // Precio del producto
            const miNodoPrecio = document.createElement('p');
            miNodoPrecio.classList.add('card-text');
            miNodoPrecio.textContent = `${info.precio}${divisa}`;
            // Botón de compra
            const miNodoBoton = document.createElement('button');
            miNodoBoton.classList.add('btn', 'btn-dark');
            miNodoBoton.textContent = 'Comprar';
            miNodoBoton.setAttribute('marcador', info.id);
            miNodoBoton.addEventListener('click', anyadirProductoAlCarrito);
            // Insertamos los productos
            miNodoCardBody.appendChild(miNodoImagen);
            miNodoCardBody.appendChild(miNodoTitle);
            miNodoCardBody.appendChild(miNodoPrecio);
            miNodoCardBody.appendChild(miNodoBoton);
            miNodo.appendChild(miNodoCardBody);
            DOMitems.appendChild(miNodo);
        });
    });
};

// Evento para añadir un producto al carrito de compras
function anyadirProductoAlCarrito(evento) {
    // Añadimos el nodo al carrito
    carrito.push(evento.target.getAttribute('marcador'))
    // Enviamos una alerta al usuario
    Swal.fire({
        title: '¡Excelente!',
        text: 'Añadiste un producto al carrito de compras',
        icon: 'success',
        confirmButtonText: 'Aceptar'
    })
    // Actualizamos el carrito
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
};

// Dibujamos los productos guardados en el carrito de compras
function renderizarCarrito() {
    // Vaciamos todo el html
    DOMcarrito.textContent = '';
    // Quitamos los duplicados
    const carritoSinDuplicados = [...new Set(carrito)];
    // Generamos los nodos a partir del carrito
    carritoSinDuplicados.forEach((item) => {
    // Obtenemos el ítem que necesitamos de la variable "base de datos"
    const miItem = data.filter((itemBaseDatos) => {
     // Verificamos si coinciden los id
        return itemBaseDatos.id === parseInt(item);
        });
    // Contamos las veces que se repite el producto
    const numeroUnidadesItem = carrito.reduce((total, itemId) => {
    // Si los id coinciden, incrementamos el contador
        return itemId === item ? total += 1 : total;
        }, 0);
    // Creamos el nodo del ítem del carrito
    const miNodo = document.createElement('li');
    miNodo.classList.add('list-group-item', 'text-right', 'mx-2');
    miNodo.textContent = `${numeroUnidadesItem} x ${miItem[0].nombre} - ${miItem[0].precio}${divisa}`;
    // Botón de eliminar producto del carrito
    const miBoton = document.createElement('button');
    miBoton.classList.add('btn', 'btn-dark', 'mx-5');
    miBoton.textContent = 'Eliminar';
    miBoton.style.marginLeft = '1rem';
    miBoton.style.marginTop = '15px';
    miBoton.dataset.item = item;
    miBoton.addEventListener('click', borrarItemCarrito);
    // Mezclamos nodos
    miNodo.appendChild(miBoton);
    DOMcarrito.appendChild(miNodo);
    });
    // Renderizamos el precio total en el HTML
    DOMtotal.textContent = calcularTotal();
};

// Evento para eliminar un ítem del carrito
function borrarItemCarrito(evento) {
    // Obtenemos el id del botón pulsado
    const id = evento.target.dataset.item;
    // Enviamos una alerta al usuario
    Swal.fire({
        title: '¡Atención!',
        text: 'Acabas de eliminar un producto de tu carrito de compras',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
    });
    // Borramos todos los productos
    carrito = carrito.filter((carritoId) => {
        return carritoId !== id;
    });
    // volvemos a renderizar
    renderizarCarrito();
    // Actualizamos el LocalStorage
    guardarCarritoEnLocalStorage();
};

// Calculamos el precio total de los productos añadidos al carrito
function calcularTotal() {
    // Recorremos el array del carrito
    return carrito.reduce((total, item) => {
        // Obtenemos el precio de cada producto
        const miItem = data.filter((itemBaseDatos) => {
            return itemBaseDatos.id === parseInt(item);
        });
        // Sumamos el total
        return total + miItem[0].precio;
    }, 0).toFixed(2);
};

// Vaciamos el carrito y lo volvemos a dibujar
function vaciarCarrito() {
    // Limpiamos los productos guardados
    carrito = [];
    // Enviamos una alerta al usuario
    Swal.fire({
        title: '¡Atención!',
        text: 'Acabas de vaciar tu carrito de compras',
        icon: 'warning',
        confirmButtonText: 'Aceptar'
    });
    // Renderizamos los cambios
    renderizarCarrito();
    // Borramos el LocalStorage
        localStorage.clear();
};

function guardarCarritoEnLocalStorage () {
    miLocalStorage.setItem('carrito', JSON.stringify(carrito));
};

function cargarCarritoDeLocalStorage () {
    // ¿Existe algo guardado previamente en el LocalStorage?
        if (miLocalStorage.getItem('carrito') !== null) {
    // Cargamos la información
            carrito = JSON.parse(miLocalStorage.getItem('carrito'));
        };
};

// Eventos
DOMbotonVaciar.addEventListener('click', vaciarCarrito);

// Invocamos las funciones
cargarCarritoDeLocalStorage();
renderizarProductos();
renderizarCarrito();
})