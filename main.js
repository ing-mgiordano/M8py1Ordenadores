import { Ordenador } from './ordenador.js'

const buttonElement = document.getElementById('button')
buttonElement.addEventListener('click', createComputers)

const ordenadores = []

function createComputers() {
    const CANTIDAD_ORDENADORES = 2
    for(let i = 0; i < CANTIDAD_ORDENADORES; i++){
        let marcaPC = prompt(`Ingrese la marca del ${i+1}º computador`)
        let modeloPC = prompt(`Ingrese el modelo del ${i+1}º computador`)
        let procesadorPC = prompt(`Ingrese el procesador del ${i+1}º computador`)
        let ramPC = prompt(`Ingrese la ram del ${i+1}º computador`)
        let discoDuroPC = prompt(`Ingrese el disco duro del ${i+1}º computador`)
    
        const myPC = new Ordenador(
            marcaPC, 
            modeloPC, 
            procesadorPC, 
            ramPC, 
            discoDuroPC
        )

        ordenadores.push(myPC)
    }
    console.log(ordenadores)

    document.getElementById("ordenador1").innerHTML = `ORDENADORES: <br>${ordenadores.join(' ').toString()}`
}

const ejecutarPrograma = () => {
    for (let i=0; i <= ordenadores.length; i++){
       let showMessage = ordenadores[i].onProcessProgram(window.navigator.vendor)
       alert(showMessage)
    }
}
// cuando usamos arrow functions debemos declarar la funcion arriba del botton 
const buttonElement2 = document.getElementById('ejecutarbutton')
buttonElement2.addEventListener('click', ejecutarPrograma)
