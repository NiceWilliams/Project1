import React from 'react';

interface IPoke {
    pokemon: string,
    id: number
}

export class PokemonComponent extends React.Component<any, IPoke> {

    constructor(props: any) {
        super(props);
        this.state = {
            pokemon: '',
            id: 0
        }
    }

    submit = async (event) => {
        event.preventDefault();
        console.log("Catching them All")
    }

    componentDidMount = async() => {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon/' + this.state.id);
        const body = await response.json();
        this.setState({
            pokemon: body
        })
    }
    render() {
        return (
            <>
                <h2>New Adventures </h2>
                <h2 id="current-poke"> New creatures</h2>
                <form onSubmit={() => {console.log("Ric ruined it")}}>
                    <input type="number" id="poke-id" />
                    <button type="submit">Catchem All</button>
                </form>
                <h3 id="current-poke2"></h3>
                <div className="text-center">
                    <img id="front_default" />
                    <h4 id="abilities"></h4>
                </div>
            </>
        );
    }
}