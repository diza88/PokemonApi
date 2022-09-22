export interface IPokemonDetalle {
    id: number
    name: string
    height: number
    weight: number    
    sprites: {
        front_default: string
        back_default: string
        
    }
    base_experience: number
    species: {name: string}
    types: [{
        name: string
    }]

    
}

