let elemento = document.getElementById('titulo');
elemento.addEventListener('click', function () {
    elemento.innerHTML = 'Adios';
    elemento.className = 'colorFondo';
    //elemento.style = 'font-size: 50px;'; 
});

let parrafoTitulo = document.getElementById('contenedorParrafoTitulo');
parrafoTitulo.innerHTML = '<p> Párrafo agregado desde JS, recordar que innerHTML renderiza las etiquetas, lo conversamos clases anteriores cuando comparamos con TextContent</p>';
console.log(parrafoTitulo);

/* Generar un login */
let btnLogin = document.getElementById('btnLogin');
let contador = 0;
btnLogin.addEventListener('click', function () {
    let txtCorreo = document.getElementById('txtCorreo');
    let txtClave = document.getElementById('txtClave');
    let mensajeError = document.getElementById('mensajeError');
    if(contador < 3){
        if (txtCorreo.value == 'admin@mail.com' && txtClave.value == '123456789') {
            console.log('Acceso concedido');
        } else {
            contador++;
            mensajeError.innerHTML = `<p style="color: red;">Datos ingresados no válidos, te quedan ${3 - contador} intentos</p>`;
        } 
    }else{
        alert('Clave bloqueada, superó tres intentos');
    }
});
