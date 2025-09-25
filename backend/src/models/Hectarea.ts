export interface IHectarea {
    id: string
    comunidad: string
    plantas: number
}

export class Hectarea implements IHectarea {
    id: string
    comunidad: string
    plantas: number

    constructor(id: string, comunidad: string, plantas: number) {
        this.id = id
        this.comunidad = comunidad
        this.plantas = plantas
    }
}