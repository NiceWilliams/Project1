import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './include/bootstrap';
import './App.css';
import { SignInComponent } from './components/sign-in.component';
import { SecondComponent } from './components/second.component';
import { FirstComponent } from './components/first.component';
import { NavComponent } from './components/nav/nav.components';
import { ClickerComponent } from './components/clicker.component';
import { ChuckNorrisJokesComponent } from './components/chuck-norris-jokes.component';
import { TicTacToeComponent } from './components/tic-tac-toe-game.component';
import { ClickerGameComponent } from './components/clicker-game.component';
import { MoviesComponent } from './components/movies.component';
import { NestedComponent } from './components/nested.component';
import { PokemonComponent } from './components/pokemon.component';
import { ReimbursementDisplay } from './components/reimbursementdisplay.component';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="App">
    <NavComponent/>
    <Route path="/first" component={FirstComponent}/>
      Best APP
      <Route path="/second" component={SecondComponent}/>
      <Route path="/sign-in" component={SignInComponent}/>
      <Route path="/clicker" component={ClickerComponent}/>
      <Route path="/nested" component={NestedComponent}/>
      <Route path="/movies" component={MoviesComponent}/>
      <Route path="/clicker-game" component={ClickerGameComponent}/>
      <Route path="/tic-tac-toe" component={TicTacToeComponent}/>
      <Route path="/chuck-norris" component={ChuckNorrisJokesComponent}/>
      <Route path="/pokemon" component={PokemonComponent}/>
      <Route path="/reimbursement" component={ReimbursementDisplay} />
    </div>
    </BrowserRouter>
  );
}

export default App;
