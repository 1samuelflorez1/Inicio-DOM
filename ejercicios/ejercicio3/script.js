
/** Ejercicio 3
 * Captura el valor de los inputs del form con querySelector y
 * al hacer click en el boton se guardan los datos en un arreglo
 * y se muestra por consola el nombre completo y la edad del usuario
 * Ejemplo:
 *  Nombre: Juan  Apellido: Perez   Email: pepe@gmail.com
 *  Alert: Tu Nombre completo es: Juan Perez, y tu Email es: pepe@gmail.com
 *  usuario = ["Juan", "Perez", "pepe@gmail.com"]
 *
 *  Pasos:
    * 1. Captura los inputs del form con querySelector
    * 2. Captura el boton con querySelector
    * 3. Agrega un evento Listener que escuche el click del boton    
    * 4. Captura el valor de los inputs y guardalos en variables
    * 5. Valida que los inputs no esten vacios y si lo estan muestra un alerta
    * 6. Si los inputs no estan vacios, guarda los valores en el arreglo usuario
    * 8. Muestra por consola el arreglo usuario
 */


let Nombre =document.querySelector('#nombre')  //estos cuatro se realizan para extraer los espacios del form para extraer su informacion
let Apellido = document.querySelector('#apellido')
let Email = document.querySelector('#email')
let Boton = document.querySelector('#boton')

console.log(Nombre)
console.log(Apellido)
console.log(Email)
console.log(Boton)

function procesarUsuario(e){
   e.preventDefault()
   let usuario = []
   let nombreValor = Nombre.value
   let apellidoValor = Apellido.value
   let nombreCompleto = nombreValor + "" + apellidoValor
   let emailValor = Email.value
   if ((nombreValor === "") || (apellidoValor === "") || (emailValor === "")) {
      alert("Porfavor ingresa todos los campos requeridos")
   }
   else{
      usuario.push(nombreValor, apellidoValor, emailValor)
      console.log("arreglo de usuario: ", usuario)
      alert("Nombre completo: "+ nombreCompleto+ "y el email es: "+ emailValor)
   }

}

Boton.addEventListener('click', procesarUsuario)