/*
confirm("Al ingresar a esta página, aceptas los términos y condiciones de Hernández Shoes");

let nombre = prompt("Por favor, ingresa tu nombre");

function saludar(nombre){

    if (nombre === ""){
        prompt("Por favor, ingresa tu nombre");
    } 
    
    else {
        alert("Bienvenid@, " + nombre);
    }
};

saludar(nombre);


let selección = confirm("¿Deseas conocer nuestros productos en oferta?");

function elegir(selección) {

    if (selección === true) {
        alert("Nuestros productos del mes con descuento son " + productos.descuento === true);
    }
    else if (selección === false) {
        alert("Te invitamos a conocer nuestra nueva línea de calzado");
    }
};

elegir(selección);
*/

const productos = [
    productoMujer1 = {
        nombre: "Zapatillas Adidas rosas",
        precio: 50000,
        talles: "35 al 39",
        descuento: true
    },
    productoMujer2 = {
        nombre: "Zapatillas Vans blancas",
        precio: 55000,
        talles: "35 al 39",
        descuento: true
    },
    productoMujer3 = {
        nombre: "Sandalias de cuero marrones",
        precio: 40000,
        talles: "37 al 39",
        descuento: false
    },
    productoMujer4 = {
        nombre: "Zapatos de vestir negros",
        precio: 60000,
        talles: "35 al 37",
        descuento: false
    },
    productoMujer5 = {
        nombre: "Zapatos de taco alto marrones",
        precio: 60000,
        talles: "36 y 39",
        descuento: false
    },
    productoHombre1 = {
        nombre: "Zapatillas Vans rojas",
        precio: 60000,
        talles: "37 al 43",
        descuento: true
    },
    productoHombre2 = {
        nombre: "Zapatillas Adidas blancas",
        precio: 50000,
        talles: "37 al 41",
        descuento: true
    },
    productoHombre3 = {
        nombre: "Zapatos náuticos marrones",
        precio: 40000,
        talles: "39 al 43",
        descuento: false
    },
    productoHombre4 = {
        nombre: "Zapatos de vestir Rochas",
        precio: 80000,
        talles: "38 al 42",
        descuento: false
    },
    productoHombre5 = {
        nombre: "Sandalias de cuero negras",
        precio: 50000,
        talles: "37 al 40",
        descuento: false
    },
]

for(let i=0; i< productos.length; i++) {
    console.log(productos[i].nombre + " cuestan " + productos[i].precio + " y están disponibles en los talles " + productos[i].talles)
}
