import React from 'react';

interface IChuckNorrisState {
    joke: string
}

export class ChuckNorrisJokesComponent extends React.Component<{}, IChuckNorrisState> {

    constructor(props) {
        super(props);
        this.state = {
            joke: 'Chuck Norris Caught all 151 Pokemon with no Pokebpalls'
        }
    }

    newJoke = async () => {
        const resp = await fetch ('http://api.icndb.com/jokes/random?limitTo=[nerdy]')
        const body = await resp.json();
        this.setState({
        joke: body.value.joke
    })
}
    render() {
        return (
            <h1>
                {this.state.joke}
                <br/><br/>
            <button onClick={this.newJoke} className="button">New Joke</button>
            </h1>
        )
    }
}