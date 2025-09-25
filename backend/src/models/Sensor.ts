export interface ISensor {
    id: string,
    type: "producto" | "crecimiento"
    ubicacion: string
}

export interface ILectorProducto {
    id: string
    color: number
    textura: number
    oxigenacion: number
    fecha: Date
}

export interface ILectorCrecimiento {
    id: string
    altura: number
    grosorTallo: number
    plagas: boolean
    humedad: number
}

export abstract class Sensor {
    id: string
    type: "producto" | "crecimiento"
    ubicacion: string

    constructor(id: string, type: "producto" | "crecimiento", ubicacion: string) {
        this.id = id
        this.type = type
        this.ubicacion = ubicacion
    }

    abstract lecturaDatos(): any
}