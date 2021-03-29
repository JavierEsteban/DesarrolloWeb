
// Variables y Comentarios

// Comentarios de una Linea.
/*
    Comentarios de varias lines.
    Variables en Js:
        let
        const (Se mantiene el mismo valor y me arrojaría un error a nivel de Ejecución)
        var ( Ya no se utilizaría en el Futuro)
*/
let nombre ='Javier';
console.log('Hola Mundo,con ' + nombre);
console.log('El número de Digitos de Tu nombre es : ' + nombre.length);

const noCambia = 'No cambiar';
//noCambia = 'Cambio';
console.log(noCambia);

//Crear variables más rapidamente
let a = 1, b= 2, c=3, d = 'Javier', e= 'Roy';
x = a + b + c ;
//console.log(' La suma es : ' + x);
console.log('%c Mis Variables', 'color:red; font-weight: bold');
//console.log('a' , a)
//console.log('b' , b)
//console.log('d' , d)
//console.log('e' , e)
console.table({a, b, c, d ,e })
