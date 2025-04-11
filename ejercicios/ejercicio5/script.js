
/**
 * Ejercicio 5. Agregar y Eliminar Elementos al DOM
 *  
 * 1. Seleccionar los elementos: contenedor y boton con los que se va a trabajar
 * 2. Crear un nuevo elemento parafo con createElement en el documento
 * 3. Agregar el texto al nuevo parafo creado
 * 4. Adicionar el elemento creado al contenedor selecccioando con appendChild
 * 5. El codigo anterior incluirlo en una nueva funcion crearParafo()
 * 6. Adicionar al boton un escuchador para el evento click que  llame la funcion
 *    crear_parrafo()
 * 
 */


const contenedor = document.querySelector('#contenedor')
const botonAgregar = document.querySelector('#botonAgregar')
const botonEliminar = document.querySelector('#botonEliminar')

function crearParrafo(){
    let parrafo = document.createElement('p')  //esto nos sirve para crear un nuevo elemento, en este caso un parrafo (p)
    parrafo.innerText = "Soy un nuevo parrafo"  //aqui se le asigna un valor al nuevo parrafo
    contenedor.appendChild(parrafo)
}

botonAgregar.addEventListener('click', crearParrafo)

botonEliminar.addEventListener('click', function(){
    let elementos = document.querySelector('p')
    if (!elementos){
        alert("Me quede sin elementos")
        return
    }
    elementos.remove()
})






