import { Persona } from persona;


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
let fooDos = 123;
if (true) {
    let fooDos = 456;
}
console.log('fooDos' + fooDos);// imprime 123

//En el ES6 podemos utilizar variables inmutables (constantes)

const fooTres = 123;
//fooTres = 456 ; //NO PERMITIDO!!! ERROR
console.log("soy un valor constante : " + fooTres);

//las contantes tambien admited objetos literales por ej :

const persona = {
    edad: 12,
}

//persona = { nombre : 'pedro'}; //ERROR no se permite la modificacion 

//Pero si se puede modificar el contenido de las variables que contiene 
//el objeto literal 
persona.edad = 18; //Permitido!

console.dir(persona);

//TIpos de Datos primitivos 

//Boolean  : true o false
let isDone: boolean = false;
console.log("isDone : " + isDone);

//Number : datos numericos 

let decimal: number = 6;
console.log("decimal : " + decimal);

let hex: number = 0xf00d;
console.log("hexadecimal : " + hex);

let binary: number = 0b1010;
console.log("Binario : " + binary);

let octal: number = 0o744;
console.log("octal : " + octal);


//String  : cadenas de caracteres

let color: string = "blue";
color = 'red';
console.log("color" + color);

//tambien se puede utilizar "Templates" para concatenar strings ej :
let fullName: string = `Bob dylan`;
let age: number = 37;
let sentence: string = `Hello, my name is ${fullName}. I'll be ${age + 1} years old nex month `;
console.log(sentence);

//este tipo de sintaxis es equivalente a :
let sentenceDos: string = "Hello, my name is " + fullName +". I ll be " + (age + 1)+ " years old nex month ";
console.log(sentenceDos);














