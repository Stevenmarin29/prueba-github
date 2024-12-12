// los arrays tienen indices numericos
//longitud dinámica en java script
//tienen heterogeneidad, diferentes tipos de datos dentro de un arrays

let numeros = [];

numeros = [15,80,650,50.30,-10];
document.write('Elementos', numeros);
document.write('<br>');

//ver primer elemento
document.write('primer elemento: ', numeros[0])
document.write('<br>');

//cambiar el primer elemento del array
numeros[0] = 100;
document.write('primer elemento: ', numeros[0]);
document.write('<br>------------');

//array de string
let frutas = ['manzanas','mangos','peras','aguacates'];
document.write('frutas: ', frutas);
document.write('<br>');

//ver cantidad de elementos
document.write('cantidad de elementos: ', frutas.length);
document.write('<br>');

//saber el último elemento del array
document.write('último elemento: ', frutas[frutas.length - 1]);
document.write('<br>');

//convertir arrays numericos en string
document.write('En string: ',numeros.toString);
document.write('<br>');

//unir tipos de arrays
let letras = ['a','b','c'];
let numeros2 = [1,2,3];
document.write('unir arrays: ', letras.concat(numeros2));
document.write('<br>');


//borrar el último elemento de un array
frutas.pop();
document.write('frutas: ', frutas);
document.write('<br>');


//agregar elemento al final del array
frutas.push('fresas');
document.write('frutas: ', frutas);
document.write('<br>');

//eliminar el primer elemento de un array
frutas.shift();
document.write('frutas: ', frutas);
document.write('<br>');

//insertar elemento al inicio
frutas.unshift('naranjas');
frutas.unshift('uvas');
document.write('frutas: ', frutas);
document.write('<br>');

//eliminar elementos a partir de un punto
frutas.splice(2,2); //se coloca en la pocición 2 del array y elimina dos valores siguientes del array, comtando el de la ocicion 2
document.write('frutas: ', frutas);
document.write('<br>');

//como copiar un array
let cantidades = [100,200,500,600,800];
let copia = cantidades.slice(0,2); // copia los valores desde la pocicion 0 hasta antes de la pocición 2
document.write('cantidades: ',cantidades);
document.write('<br>');
document.write('copia: ', copia);
document.write('<br>');

//organizar alfabeticamente un array
let objetos = ['carro','botella','planeta','zorro'];
document.write(objetos.sort());
document.write('<br>');

//trae alfabeticamente al reves los elementos de un array
document.write(objetos.reverse());
document.write('<br>');
 //crear unn array inmodificable, con valores inalterables
 const autos = ['toyota','bmw','chevrolet'];
 document.write(autos);
 document.write('<br>');
autos = [0]('Autos: ',autos);   


