export interface IAlmacen {
    id: string
    nombre: string
    comunidad: string
    location: string
}

export class Almacen {
    private id: string
    private nombre: string
    private comunidad: string
    private location: string

    constructor(id: string, nombre: string, comunidad: string, location:string) {
        this.id = id
        this.nombre = nombre
        this.comunidad = comunidad
        this.location = location
    }

    
}