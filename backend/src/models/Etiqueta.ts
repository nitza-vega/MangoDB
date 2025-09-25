export interface IEtiqueta {
    id: string,
    hectarea: string,
    planta: string,
    kilogramos: string
}

export class Etiqueta implements IEtiqueta {
    id: string
    hectarea: string
    planta: string
    kilogramos: string

    constructor(id: string, hectarea: string, planta: string, kilogramos: string) {
        this.id = id
        this.hectarea = hectarea
        this.planta = planta
        this.kilogramos = kilogramos
    }

    validate(): boolean {
        return !!this.id && !!this.hectarea && !!this.planta && !!this.kilogramos
    }
}