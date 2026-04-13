let nombre = prompt ("ingrese su nombre");
let edad = prompt("ingrese su edad");
let cantidadEntradas = prompt ("ingrese la cantidad de entradas que desea comprar")

console.log("datos ingresados :");
console.log(nombre, edad, cantidadEntradas);

cantidadEntradas = Number(cantidadEntradas);

if (nombre === "") {
    console.log("el nombre no puede estar vacio.");
} else if (edad < 18) {
    console.log("no podes comprar entradas, sos menor de edad.");
} else if (cantidadEntradas === 0) {
    console.log("no has seleccionado ninguna entrada");
} else {
    console.log("compra válida ");
}

const precioEntrada = 1000 ;
let total = precioEntrada * cantidadEntradas;
console.log ("total a pagar :"+ total)

total = total + 500
console.log("total con recargo:" + total)

console.log("Hola "  +  nombre + ", su compra de " + cantidadEntradas + " entradas ha sido procesada. El total a pagar es: $" + total);


