const nombre = prompt ("Ingrese su nombre")
const edad = parseInt(prompt ("Ingrese su edad"))
const contrasena = prompt ("ingrese una constraseña minimo 6 caractereles")
const min = 6
if (nombre === ""){
    console.log("El nombre no puede estar vacio.")
}else if (edad < 18){

    console.log("Acceso denegado, deber ser mayor de edad.")
}else if  (contrasena.length < min){
    console.log("La contraseña debe tener al menos 6 caracteres.")
}else{
    const tendras_en_diez_años=edad + 10
    console.log("bienvenido",nombre) 
    console.log("En 10 años tendras", tendras_en_diez_años)

    console.log("hasta luego",nombre,"actualmente tienes",edad,"y en 10 años", tendras_en_diez_años)
}