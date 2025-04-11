
/**
 * Ejercicio 4. Jerarquia Elementos al DOM
 * ---------------------------------------
 * 1. Capturar los elementos: contenedor, parrafo1 y parrafo2 con queryselector
 * 2. Ir al nodo padre del parrafo1 y mostrar su etiqueta con tagName
 * 3. Mostrar los hijos que tiene el elemento contenedor
 * 3. Mostrar cuantos hijos tiene el elemento contenedor
 * 4. Mostrar el primer hijo de el contenedor con []
 * 5. Mostrar el Primer y último hijo con firstElementChild y lastElementChild
 * 6. Mostrar el texto del siguiente hermano de parrafo1 nextElementSibling
 * 7. Mostrar el id del anterior hermano de parrafo2 previousElementSibling
 * 8. Recorrer la lista de frutas (Nodos hijos) con ayuda del DOM 
 */

  // Capturar los  elementos 

    let contenedor = document.querySelector('#contenedor')
    let parrafo1 = document.querySelector('#parrafo1')
    let parrafo2 = document.querySelector('#parrafo2')
    
    console.log(contenedor.children[0],contenedor.children[1],contenedor.children[2]) //esto nos sirve para extraer de un contenedor
                                                                                    //o div los hijos de este
    console.log(contenedor.firstElementChild)
    console.log(contenedor.lastElementChild)
    

  // Nodo padre

    console.log(parrafo1.parentNode.tagName)  //esto nos sirve para tener padre de algo especifico, por ejemplo el padre de parrafo1
  // Hijos del contenedor

    console.log(contenedor.children[0],contenedor.children[1],contenedor.children[2]) //esto nos sirve para extraer de un contenedor
                                                                                    //o div los hijos de este

  // Primer y último hijo

    console.log(contenedor.firstElementChild)
    console.log(contenedor.lastElementChild)

  // Hermanos
    
    console.log("Hermanos")
    console.log(parrafo1.nextElementSibling)
    console.log(parrafo2.previousElementSibling)


  // Recorrer la lista de frutas con el DOM

    let frutas = document.querySelector('#frutas')
    console.log(frutas)
    let hijos = frutas.children
    console.log(hijos)

    for (const elemento  of hijos){
        console.log(elemento.textContent)
    }