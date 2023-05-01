import { promises } from "fs";

type pokemonProps = {
    nationalDex: number,
    nome: string,
    gen: number,
    tipoPrimario: string,
    tipoSecundario?: string,
    sprite: string,
    shinySprite?: string,
};

class Pokemon{
    public props: Required<pokemonProps>;
    
    constructor(props: pokemonProps){
        this.props = {
            ...props,
            tipoSecundario: props.tipoSecundario || '',
            shinySprite: props.shinySprite || ''
        };
    };
};

export { pokemonProps, Pokemon };