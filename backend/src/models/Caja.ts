import { Ubicacion_Caja } from "./Ubicacion_Caja"

export interface ICaja {
    id: string
    peso: number
    hectarea: string
    ubicacion: Ubicacion_Caja
}

export class Caja implements ICaja {
    id: string
    peso: number
    hectarea: string
    ubicacion: Ubicacion_Caja

    constructor(id: string, peso: number, hectarea: string, ubicacion: Ubicacion_Caja) {
        this.id = id
        this.peso = peso
        this.hectarea = hectarea
        this.ubicacion = ubicacion
    }
}