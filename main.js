const pantalla = document.querySelector(".pantalla"); /* traemos a la clase pantalla a js */
const botones = document.querySelectorAll(".btn"); /* llamamos a todos los botones y se nos crea un array */

botones.forEach(boton => { /* Agregamos al array con botones para cada uno un evento al clickearlo */
    boton.addEventListener("click", () => {
        const botonApretado = boton.textContent; /* El boton apretado = texto en pantalla */

        if (boton.id === "c") {
            pantalla.textContent = "0" /* cuando se toca la C se borra todo, pero se sigue ejecutando lo de abajo por eso se pone RETURNO que termina la función y comienza de nuevo */
            return;
        } 

        if (boton.id === "borrar") {
            if (pantalla.textContent.length === 1 || pantalla.textContent === "Error!") { /* al apretar la C se borraba todo sin dejar un solo numero, por lo que si solamente la longitud de la pantalla es 1 o salió un error, el valor va a ser 0. */
                pantalla.textContent = 0;
            } else{
                pantalla.textContent = pantalla.textContent.slice(0, -1)
            }
            return;
        }

        if (boton.id === "igual") {
            try{ /* lo que hace es intentar */
                pantalla.textContent = eval(pantalla.textContent); /* es una funcion de js que evalua un conjunto de strins con operaciones matematicas y lo escribe en la pantalla */
            } catch { /* si al intentar no puede, pasa al catch y ponemos un textContent en pantalla que diga ERROR */
                pantalla.textContent = "Error!";
            }
            return;
        }

        if (pantalla.textContent === "0" ) { /* si tenemos el 0 en pantalla se va a reemplazar por el proximo boton*/
            pantalla.textContent = botonApretado;
        } else {
            pantalla.textContent += botonApretado; /* el texto en pantalla agrega el proximo boton apretado */  
        }
    })
})