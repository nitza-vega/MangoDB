export interface IHectarea {
    id: string
    comunidad: string
    plantas: number
}

export class Hectarea {
    private id: string
    private comunidad: string
    private plantas: number

    constructor(id: string, comunidad: string, plantas: number) {
        this.id = id
        this.comunidad = comunidad
        this.plantas = plantas
    }
}