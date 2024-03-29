window.addEventListener("load", IniciaJuego)

function IniciaJuego(){
    puntaje = 0
    aciertos = 0
    generarTablero()
    cronometro()
    window.alert("Comienza el juego")
}

let segundos = document.getElementById('tiempo')

function cronometro(){
    let tiempoestablecido = 30
    let contador = setInterval(()=>{
        tiempoestablecido--
        segundos.innerHTML = tiempoestablecido
        if (tiempoestablecido==0){
            clearInterval(contador)
            tiempo(puntaje)
        }else{
            if(aciertos==8){
                clearInterval(contador)
                terminado(puntaje)
            }
        }
    },1000)
}

function tiempo(puntaje1){
    window.alert("¡El tiempo terminó!\nPuntaje Obtenido: " + puntaje1)
    IniciaJuego()
}

function terminado(puntaje2){
    window.alert("¡Felicidades! Has encontrado todos los pares de cartas\nPuntaje Obtenido: " + puntaje2)
    IniciaJuego()
}

function cargarIconos() {
    iconos = [
        '<i class="fas fa-dog" style="--fa-primary-color: #000000; --fa-secondary-color: #000000;"></i>',
        '<i class="fas fa-cat" style="--fa-primary-color: #000000; --fa-secondary-color: #000000;"></i>',
        '<i class="fas fa-otter" style="--fa-primary-color: #000000; --fa-secondary-color: #1f1e1e;"></i>',
        '<i class="fas fa-dragon" style="--fa-primary-color: #000000; --fa-secondary-color: #0d0d0d;"></i>',
        '<i class="fas fa-spider" style="color: #000000;"></i>',
        '<i class="fas fa-fish" style="color: #000000;"></i>',
        '<i class="fas fa-horse" style="color: #000000;"></i>',
        '<i class="fas fa-pen" style="color: #000000;"></i>',
    ]
}

function generarTablero() {
    cargarIconos()
    selecciones = []
    let campo = document.getElementById("containerc")
    let tarjetas = []
    for (let i = 0; i < 16; i++) {
        tarjetas.push(`
            <div class="areat" onclick="seleccionarTarjeta(${i})">
                <div class="tarjeta" id="tarjeta${i}">
                    <div class="carat" id="cartat${i}">
                    ${iconos[i % iconos.length]}
                    </div>
                    <div class="caras">
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        `);
    }
    tarjetas.sort(()=>Math.random()-0.5)
    campo.innerHTML = tarjetas.join('')
}

let selecciones = []

function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById('tarjeta' + i)
    if (tarjeta.style.transform != "rotateY(180deg)"){
        tarjeta.style.transform = "rotateY(180deg)"
        selecciones.push(i)
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones)
        selecciones = []
    }
}

let puntajeAcierto = 20
let puntaje = 0
let aciertos = 0

function deseleccionar(selecciones) {
    let trasera1 = document.getElementById('cartat' + selecciones[0])
    let trasera2 = document.getElementById('cartat' + selecciones[1])
        setTimeout(() => {
        if (trasera1.innerHTML != trasera2.innerHTML) {
            let tarjeta1 = document.getElementById('tarjeta' + selecciones[0])
            let tarjeta2 = document.getElementById('tarjeta' + selecciones[1])
            tarjeta1.style.transform = "rotateY(0deg)"
            tarjeta2.style.transform = "rotateY(0deg)"
        }else{
            puntaje+=puntajeAcierto
            aciertos++
        }
    }, 1000)
}