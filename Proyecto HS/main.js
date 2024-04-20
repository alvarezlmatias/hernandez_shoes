
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


