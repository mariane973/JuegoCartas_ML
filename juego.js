function cargarIconos() {
    iconos = [
        '<i class="fas fa-dog" style="--fa-primary-color: #000000; --fa-secondary-color: #000000;"></i>',
        '<i class="fas fa-cat" style="--fa-primary-color: #000000; --fa-secondary-color: #000000;"></i>',
        '<i class="fas fa-otter" style="--fa-primary-color: #000000; --fa-secondary-color: #1f1e1e;"></i>',
        '<i class="fas fa-dragon" style="--fa-primary-color: #000000; --fa-secondary-color: #0d0d0d;"></i>',
        '<i class="fas fa-spider" style="color: #000000;"></i>',
        '<i class="fas fa-otter" style="color: #000000;"></i>',
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
        <div class="tarjeta id="carta(${i})"">
          <div class="carat id="cartat(${i})">
            ${iconos[0]}
          </div>
          <div class="caras">
            <i class="fas fa-star"></i></i>
          </div>
         </div>
         </div>
         </div>
      </div>       
        `)
        if (i % 2 == 1) {
            iconos.splice(0, 1)
        }
    }
    campo.innerHTML = tarjetas.join('')
    }
function seleccionarTarjeta(i) {
    let tarjeta = document.getElementById("tarjeta" + i);
    if (tarjeta.style.transform != "rotateY(180deg)") {
        tarjeta.style.transform = "rotateY(180deg)";
        tarjeta.onclick = null; // Desactivar el evento onclick
        selecciones.push(i);
    }
    if (selecciones.length == 2) {
        deseleccionar(selecciones);
        selecciones = [];
    }
}





