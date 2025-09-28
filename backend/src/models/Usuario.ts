export interface IUsuario {
    id: string
    name: string
    rol: string
    password: string
}

export class Usuario {
    private id: string
    private name: string
    private rol: string
    private password: string

    constructor(id: string, name: string, rol: string, password: string) {
        this.id = id
        this.name = name
        this.rol = rol
        this.password = password
    }

    validate(): boolean {
        return !!this.name && !!this.password
    }

    //hashPassword()
}