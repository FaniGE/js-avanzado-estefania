console.log('============== BLOQUE 1 ==============');
/**
 * BLOQUE 3 - Soclución 1: Uso de callbacks
 * Un callback es una funcion que se pasa como parametro a otra, con lael fin de ejecutar en el momento que la necesitemos.
 * NOTA: No es una buena practica por el anidamiento que produce (callback hell)
 */
const showSuccessMessage = () => {
    console.log('3 Ver el mensaje de gracias por su compra joven');
};
const validatingPayment = (showSuccessMessage) => {
    setTimeout(() => {
        console.log('2 Validar la tarjeta de credito/dibito y mostrar un loader');
        showSuccessMessage();
    }, 0);
};
console.log('1 Presionar el boton comprar');
validatingPayment();
