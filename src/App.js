import React from 'react';
import './App.css';
import './assets/css/styles.css'
import Game from './components/game/Game';

function App() {
  const imagesPath = process.env.PUBLIC_URL + '/assets/images/'
  const teamMagic = {
    name: "Magic",
    logo: `${imagesPath}magic_logo.png`
  }
  const teamFlash = {
    name: "Flash",
    logo: `${imagesPath}utah_flash.gif`
  }
  const teamBananas = {
    name: "Bananas",
    logo: `${imagesPath}bananas.png`
  }
  const teamNuts = {
    name: 'Nuts',
    logo: `${imagesPath}nuts.jpg`
  }
  return (
    <div className="App">
      <header className="App-header">
      <Game venue='Thunderdome' hometeam={teamMagic} visitors={teamFlash}/>
      </header>
    </div>
  );
}

export default App;
