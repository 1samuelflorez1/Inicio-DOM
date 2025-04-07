
// Ejercicio2: Cambiar los Atributos de los elementos del DOM

// 2.1 Seleccionar elemento del DOM
/** 
 * 1. Seleccionar el elemento h1 con querySelector
 * 2. Cambiar el titulo por "Hola Mundo"
 * 3. Ver el efecto en el navegador
 */
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

let titulo = document.querySelector('#titulo')
titulo.innerText = ("Espacio")  //este es un ejemplo de como se puede cambiar los elementos del html desde js
//teniendo ya seleccionado lo que queremos cambiar, en este caso el titulo


console.log(titulo)

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

// 2.2 Cambiar el atributo src de la imagen
/**
 * 1. Seleccionar la imagen con querySelector
 * 2. Cambiar su atributo src por "imagen/carita.png"
 * 3. Ver el efecto en el navegador
 */

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

let img = document.querySelector('img')
img.src = "https://wallpapers.com/images/hd/void-5sm9tokk2youui90.jpg"
console.log(img)


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/


// 2.3 Cambiar la clase del div
/**
 * 1. Seleccionar el div main-div con querySelector
 * 2. Cambiar su clase por "new-div"
 * 3. Ver el efecto en el navegador
 */
/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

// let div = document.querySelector('.main-div')
// div.className = 'new-div'
// console.log(div)


/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

 

// 2.4 Cambiar el atributo href del enlace
/**
 * 1. Seleccionar el enlace con querySelector usando su id
 * 2. Mostrar su contenido en consola
 * 3. Mostrar el contenido de su atributo href por consola con getAttribute
 * 2. Cambiar su atributo href por "https://www.icesi.edu.co"
 * 3. Cambiar su texto por "Universidad Icesi"
 * 4. Cambiar su atributo target por "_blank"
 * 5. Cambiar su clase por "boton"
 * 6. Ver el efecto en el navegador
 * 7. Eliminar la clase del enlace
 * 8. Ver el efecto en el navegador
 */

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/

let enlace = document.querySelector('#enlace')  //esto me sirve para comenzar con lso cambios de algo especifico (un enlace)
console.log(enlace.getAttribute('href')) //esto nos sirve para extraer el attribute de href para modificarlo
enlace.setAttribute('href', 'https://www.icesi.edu.co') //esto me sirve para modificar lo que este ubicado de primero
console.log(enlace)
enlace.innerText = "Universidad Icesi" //esto es para cambiar el texto de lo que se presenta en el innertext del enlace
enlace.setAttribute('target', '_blank') //esto es para cambiar el target del href (del enlace)
enlace.setAttribute('class', 'boton') //esto sirve igual para cambiar la class o añadir una class al enlace
enlace.removeAttribute('class') //esto es para quitar  la clase que le quitamos 
console.log(enlace)

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/




// 2.5 Cambiar el estilo del div
/**
 * 1. Seleccionar el div con querySelector
 * 2. Cambiar su estilo por:
 *    - background-color: green
 *    - color: white
 *    - font-size: 30px
 *    - font-family: Arial
 *    - text-align: center
 *    - padding: 20px
 *    - border-radius: 10px
 * 3. Ver el efecto en el navegador
 */

/*-----------------------------------------------------------------------------------------------------------------------------------------------*/


let div = document.querySelector('.main-div')
div.style.backgroundColor = "green"
div.style.color = "white"
div.style.fontSize = "30px"
div.style.textAlign = "center"
div.style.padding = "20px"
div.style.borderRadius = "10px"
console.log(div)


