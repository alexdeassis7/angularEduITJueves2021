"use strict";
exports.__esModule = true;
/**comentario de bloque*/
//comentario de linea 
//Let/ var /const
//ej var :no tiene un ambito de bloque 
/*var foo = 123;
if(true){
    var foo = 456;
}
console.log('foo' + foo);//imprime 456
*/
//ej let : si tiene un ambito de bloque
var fooDos = 123;
if (true) {
    var fooDos_1 = 456;
}
console.log('fooDos' + fooDos); // imprime 123
//En el ES6 podemos utilizar variables inmutables (constantes)
var fooTres = 123;
//fooTres = 456 ; //NO PERMITIDO!!! ERROR
console.log("soy un valor constante : " + fooTres);
//las contantes tambien admited objetos literales por ej :
var persona = {
    edad: 12
};
//persona = { nombre : 'pedro'}; //ERROR no se permite la modificacion 
//Pero si se puede modificar el contenido de las variables que contiene 
//el objeto literal 
persona.edad = 18; //Permitido!
console.dir(persona);
//TIpos de Datos primitivos 
//Boolean  : true o false
var isDone = false;
console.log("isDone : " + isDone);
//Number : datos numericos 
var decimal = 6;
console.log("decimal : " + decimal);
var hex = 0xf00d;
console.log("hexadecimal : " + hex);
var binary = 10;
console.log("Binario : " + binary);
var octal = 484;
console.log("octal : " + octal);
//String  : cadenas de caracteres
var color = "blue";
color = 'red';
console.log("color" + color);
//tambien se puede utilizar "Templates" para concatenar strings ej :
var fullName = "Bob dylan";
var age = 37;
var sentence = "Hello, my name is " + fullName + ". I'll be " + (age + 1) + " years old nex month ";
console.log(sentence);
//este tipo de sintaxis es equivalente a :
var sentenceDos = "Hello, my name is " + fullName + ". I ll be " + (age + 1) + " years old nex month ";
console.log(sentenceDos);
