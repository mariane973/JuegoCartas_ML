let carga = document.getElementById('juego')

carga.addEventListener('load', InicioJuego)

function InicioJuego(){
    alert("El juego comienza en este momento")
}

function cargarIconos() {
    iconos = [
        '<i class="fa-duotone fa-dog" style="--fa-primary-color: #000000; --fa-secondary-color: #000000;"></i>',
        '<i class="fa-duotone fa-cat" style="--fa-primary-color: #000000; --fa-secondary-color: #000000;"></i>',
        '<i class="fa-duotone fa-otter" style="--fa-primary-color: #000000; --fa-secondary-color: #1f1e1e;"></i>',
        '<i class="fa-duotone fa-dragon" style="--fa-primary-color: #000000; --fa-secondary-color: #0d0d0d;"></i>',
        '<i class="fa-solid fa-spider" style="color: #000000;"></i>',
        '<i class="fa-solid fa-otter" style="color: #000000;"></i>',
        '<i class="fa-solid fa-horse" style="color: #000000;"></i>',
        '<i class="fa-duotone fa-cow" style="--fa-primary-color: #000000; --fa-secondary-color: #000000;"></i>',
    ]
}