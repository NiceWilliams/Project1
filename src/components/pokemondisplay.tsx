import * as React from 'react';


interface IPokeDisplay {
    pokemon: any
}

 
export class PokemonDisplay extends React.Component<any, IPokeDisplay> {
  
    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: []
        };
    }
}

