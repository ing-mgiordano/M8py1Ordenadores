export class Ordenador {
    #marca
    #modelo
    #procesador
    #ram
    #discoDuro

    constructor(marca, modelo, procesador, ram, discoDuro){
        this.#marca = marca
        this.#modelo = modelo
        this.#procesador = procesador
        this.#ram = ram
        this.#discoDuro = discoDuro
    }
    //getters
    get Marca() {
        return this.#marca
    }
    get Modelo() {
        return this.#modelo
    }
    get Procesador() {
        return this.#procesador
    }
    get Ram() {
        return this.#ram
    }
    get DiscoDuro() {
        return this.#discoDuro
    }
    //setters
    set Procesador (procesador) {
        this.#procesador = procesador
    }
    set Ram (ram) {
        this.#ram = ram
    }
    set DiscoDuro (discoDuro) {
        this.#discoDuro = discoDuro
    }
    //metodos propios
    onProcessProgram(programa) {
        return `En estos momentos ${this.#marca} está ejecutando: ${programa}`
    }
    toString() {
        return `
            Marca: ${this.#marca} <br>
            Modelo: ${this.#modelo} <br>
            Procesador: ${this.#procesador} <br>
            Mem RAM: ${this.#ram} <br>
            Disco Duro: ${this.#discoDuro} <br>
            <br>
        `
    }
}