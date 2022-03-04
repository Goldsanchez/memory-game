
// random numbers
let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
numeros.sort(()=>{return Math.random()-0.5})


// variables
let tarjetaDestapadas = 0
let tarjeta1 = null
let tarjeta2 = null
let primerResultado = null
let segundoResultado = null

let aciertos = 0
let tiempo =  null
let movimientos = 0
let temporizador = false
let timer = 60
let tiempoRegresivoId = null

let mostrarMovimientos = document.querySelector(".movimientos")
let mostrarAciertos = document.querySelector(".aciertos")
let mostrarTiempo = document.querySelector(".tiempo")


// functions
function contartiempo(){
    tiempoRegresivoId = setInterval(()=>{
        timer--
        mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`
        if(timer == 0){
            clearInterval(tiempoRegresivoId)
            bloquearTarjetas()
        }
    },1000)
}

function bloquearTarjetas(){
    for( let i = 0; i<=15; i++){
        let tarjetaBloqueada = document.getElementById(i)
        tarjetaBloqueada.innerHTML = numeros[i]
        tarjetaBloqueada.disabled = true

    }
}

// main function
function destapar(id){
    
    if(temporizador == false){
        contartiempo()
        temporizador = true
   
    }
    tarjetaDestapadas++
    console.log(tarjetaDestapadas)
    mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`



    if (tarjetaDestapadas == 1){
        tarjeta1 = document.getElementById(id)
        primerResultado = numeros[id]
        tarjeta1.innerHTML = primerResultado
        tarjeta1.disabled = true

    }else if(tarjetaDestapadas == 2){
        tarjeta2= document.getElementById(id)
        segundoResultado = numeros[id]
        tarjeta2.innerHTML = segundoResultado
        tarjeta2.disabled = true
        movimientos++
        mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`

         if(primerResultado == segundoResultado){
            tarjetaDestapadas = 0
            aciertos++
            mostrarAciertos.innerHTML = `Aciertos: ${aciertos}`
            console.log(tarjetaDestapadas)

            if(aciertos == 8){
                mostrarAciertos.innerHTML = `Ganaste en ${aciertos} aciertos,`
                mostrarMovimientos.innerHTML = `y en ${movimientos} movimientos`
                mostrarTiempo.innerHTML = `${timer} segundos`
                clearInterval(tiempoRegresivoId)
            }
         }else
         setTimeout(()=>{
             tarjeta1.innerHTML = ""
             tarjeta2.innerHTML = ""
             tarjeta1.disabled = false
             tarjeta2.disabled = false
             tarjetaDestapadas = 0
         },800)

    }
}