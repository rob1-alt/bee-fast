/* eslint-disable jsx-a11y/alt-text */
import logoNav from './img/logoNav.png'
import threeDR from './img/right3d.png'
import threeDL from './img/left3d.png'
import arrow from './img/arrow.png'
import trots from './img/trots.png'
import './App.css';
import { Helmet } from 'react-helmet'


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Bee🐝</title>
        <meta name="Move fast ! " content="coding with bee ❤️ "/>
      </Helmet>
        <div className='headerNav'>
        <img src={logoNav} className="beeNav" />
        <nav className='navBar'>
          <ul className='menuHead'>
            <a href='#'><li>PRODUITS</li></a>
            <a href='#'><li>NEWS</li></a>
            <a href='#'><li>CONTACT</li></a>
          </ul>
        </nav>
        </div>
      <header className="App-header">
      <img src={threeDR} className="Dright" />
      <img src={threeDL} className="Dleft" />
      <img src={trots} className='trots'/>
        <p className='liberty'>
          Hi, it's <font color="#FFF200">Bee</font>
        </p>
      <p className='ride'>Change your ride</p>
      <div className='union'></div>
      <a href="#">
      <img src={arrow} className='arrow'/>
      </a>
      </header>

    </div>
  );
}

export default App;
