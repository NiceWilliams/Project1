import React from 'react';

interface IState {
    clicks: number;
}

export class ClickerComponent extends React.Component<any, IState> {
     constructor(props: any) {
        super(props);
        this.state ={
            clicks: 0
        }
    }
    click = (amount: number) => {
        this.setState({
            clicks: this.state.clicks + amount
        })
    }

    render() {
        return (
            <div>
                <h2>Clicks: {this.state.clicks}</h2>
                <button onClick={() => this.click(1)} className= 'button'>TheClick</button>
                <br/> <br/>
                <button onClick={() => this.click(2)} className= 'button2'>TheClick+2</button>
            </div>
        )
    }
}