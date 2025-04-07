
//  Ejercicio 1 - Seleccionar elementos del DOM

/** 1.1. Selecionar x id
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 */
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
    // let titulo = document.getElementById('titulo') //esto nos sirve para extraer el id de un elemento del HTML
    // console.log(titulo)
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/




/** 1.2. Seleccionar x clase
 * 1. Seleccionar el div por su clase main-div 
 * 2. Mostrar su contenido en consola
 * 3. Mostrar su contenido en consola con innerHTML
 * 4. Mostrar su contenido en consola con innerText
 */
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
    // const midiv = document.getElementsByClassName('main-div')[0]  //este cero nos sirve para seleccionar el primer elemento del div
    // console.log(midiv)

    // const midiv2 = document.querySelector('.main-div')
    // console.log(midiv2.innerHTML)  //esto nos sirve para extraer en la consola todo el codigo 
    // console.log(midiv2.innerText)   //este nos sirve para extraer un texto que se encuentre
    // console.log(midiv2)

    /*-----------------------------------------------------------------------------------------------------------------------------------------------*/


// 1.3. Por etiqueta
/**
 * 1. Seleccionar el elemento por su etiqueta "img"
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de los atributos src y alt por consola
 */
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
    // let miimg = document.getElementsByTagName('img')[0] //el cero me selecciona el primer elemento, en vez de una coleccion
    // //ese cero nos sirve cuando queremos extraer una tag especifica, pero hay varias, asique tomamos solo una

    // console.log(miimg)

    // let miImg = document.querySelectorAll("img") //esto sirve para crear una coleccion con todos los tags que indiquemos 
    // console.log(miImg)

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/
// 1.4. Por querySelector
/**
 * 1. Seleccionar el elemento por su id "titulo"
 * 2. Mostrar su contenido en consola
 * 3. Seleccionar el div por su clase main-div 
 * 4. Mostrar su contenido en consola
 * 5. Seleccionar el elemento por su etiqueta "img"
 * 6. Mostrar su contenido en consola
 * 7. Mostrar el contenido de los atributos src y alt por consola
 */

let titulo = document.querySelector('#titulo')
console.log(titulo)

let div1 = document.querySelector('.main-div')
console.log(div1)

let img = document.querySelector('img')
console.log(img)

console.log(img.src)
console.log(img.alt)






