const sumar = (n1, n2) => n1 + n2
const restar = (n1, n2 = 10) => n1 - n2


const calculoComisiones = (rut, nombre, ...comisiones) => {
    // console.log(rut);
    // console.log(nombre);
    // console.log(comisiones);

    let total = 0;
    for (let index = 0; index < comisiones.length; index++) {
        total = total + comisiones[index];
        
    }
    console.log(comisiones)
}

export default { sumar, restar, calculoComisiones }