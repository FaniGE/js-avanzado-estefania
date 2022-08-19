/**
 * BLOQUE 1 - Código sincrono
 * Una linea se ejecuta inmediamente despues de la otransno hay codigo dependiente o bloqueante.
 */
console.log('============== BLOQUE 1 ==============');
console.log('Primero'); 
console.log('Segundo');
console.log('Tercero');

/**
 * BLOQUE 2 - Problema típico de asincronia
 * 
 */
const validatingPayment = () => {
    setTimeout(() => {
        console.log('2 Validar la tarjeta de credito/dibito y mostrar un loader');
    }, 0);
}
console.log('1 Presionar el boton comprar');
validatingPayment();
console.log('3 Ver el mensaje de gracias por su compra joven');