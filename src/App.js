import BEE from './img/mainBee.png';
import logoNav from './img/logoNav.png'
import threeDR from './img/right3d.png'
import threeDL from './img/left3d.png'
import button from './img/button.png'
import './App.css';
import { Helmet } from 'react-helmet'


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Bee🐝</title>
        <meta name="Move fast ! " content="coding with bee ❤️ " />
      </Helmet>
        <div className='headerNav'>
        <img src={logoNav} className="beeNav" />
        </div>
      <header className="App-header">
      <img src={threeDR} className="Dright" />
      <img src={threeDL} className="Dleft" />
        <img src={BEE} className="App-logo" alt="logo" />
        <p className='liberty'>
          BEE LIBERTY 🐝
        </p>
        <img src={button}/>
      </header>

    </div>
  );
}

export default App;
