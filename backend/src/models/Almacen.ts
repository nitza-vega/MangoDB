export interface IAlmacen {
    id: string
    nombre: string
    comunidad: string
    location: string
}

export class Almacen implements IAlmacen {
    id: string
    nombre: string
    comunidad: string
    location: string

    constructor(id: string, nombre: string, comunidad: string, location:string) {
        this.id = id
        this.nombre = nombre
        this.comunidad = comunidad
        this.location = location
    }

    
}