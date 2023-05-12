import funciones from "./utils/funciones.js";

const { sumar, restar } = funciones

// Opción 1
// console.log("Sumar", funciones.sumar(8,5));
// console.log("Restar", funciones.restar(8,5));

// Opción 2
// console.log("Sumar", sumar(8, 5));
// console.log("Restar", restar(5, 2));

// console.log("Restar con más parámetros", restar (5,2,5,1,8));



// Llamado de función con parámetros REST
// calculoComisiones("12345678-9","Juan","20_000","15_000")





const persona = {
    rut:"12345678-9",
    nombre: "Pablo",
    apellido: "Marmol",
    direccion: {
        region: 'BioBio',
        comuna: 'Concepción'
    }
}


// Ejemplo iterando 

for (const dato of persona) {
    console.log(dato);
}