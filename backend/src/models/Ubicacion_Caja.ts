export interface IUbicacion_Caja {
    id: string,
    estante: string,
    division: string,
    subdivision: string
}

export class Ubicacion_Caja implements IUbicacion_Caja {
    id: string
    estante: string
    division: string
    subdivision: string

    constructor(id: string, estante:string, division: string, subdivision: string) {
        this.id = id
        this.estante = estante
        this.division = division
        this.subdivision = subdivision
    }

    validate(): boolean {
        return !!this.id && !!this.estante && !!this.division && !!this.subdivision
    }
}