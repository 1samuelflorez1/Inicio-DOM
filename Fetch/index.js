// Javascript se ejecuta tiene ejecución de forma asincrona. Por ejemplo
// fetch("https://www.google.com")
// .then(response => console.log(resolve))
// .catch(error => console.log(error))

// // Para que el código se ejecute "secuencialmente” debemos agregar await a la promesa.
// const response = await fetch("https://www.google.com");


// // Pero por si solo no se va a ejecutar. Asi que debemos agregar async a la función que ejecuta el código.
// const renderEx = async () => {
// 	const response = await fetch("https://www.google.com");
// }

// document.addEventListener("DOMContentLoaded", renderEx);

// Entendiendo este primer paso, podremos cargar archivos en formato JSON usando la función fetch. Creemos un archivo llamado personas.json y agreguemos el siguiente contenido:

// [
//     {
//       "nombre": "Pedro",
//       "edad": 25,
//       "esCasado": false,
//       "estatura": 1.75
//     },
//     {
//       "nombre": "Ana",
//       "edad": 40,
//       "esCasado": true,
//       "estatura": 1.64
//     }
//   ]
  

// Ahora creemos el código necesario para cargar el archivo:
const render = async () => {
	const response = await fetch("personas.json");
  const data = await response.json();
	// Imprimimos el resultado
	console.log(data);
	// Iteremos por los objetos
	
	const contenedor = document.querySelector("#contenedor");

	for(const persona of data) {
		const nombre = persona.nombre;
		const edad = persona.edad;
		const esCasado = persona.esCasado;
		const estatura = persona.estatura;
		
		// Mostremos algunos valores
		console.log(nombre, edad, esCasado, estatura);

		// Vamos a crear un párrafo
		const parrafo = document.createElement("p");
		p.innerHTML = nombre;
		contenedor.appendChild(contenedor);
	}
}

document.addEventListener("DOMContentLoaded", render);