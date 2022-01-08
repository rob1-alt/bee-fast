/* eslint-disable jsx-a11y/alt-text */
import logoNav from './img/logoNav.png'
import threeDR from './img/right3d.png'
import threeDL from './img/left3d.png'
import arrow from './img/arrow.png'
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
        <ul className='menu'>
          <li>Test</li>
          <li>Test</li>
          <li>Test</li>
        </ul>
        </div>
      <header className="App-header">
      <img src={threeDR} className="Dright" />
      <img src={threeDL} className="Dleft" />
        <p className='liberty'>
          Hi, it's <font color="#FFF200">Bee</font>
        </p>
      <p className='ride'>Change your ride</p>
      <div className='union'></div>
      <img src={arrow} className='arrow'/>
      
      </header>

    </div>
  );
}

export default App;
