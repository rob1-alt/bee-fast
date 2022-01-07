import logo from './bee.png';
import './App.css';
import { Helmet } from 'react-helmet'


function App() {
  return (
    <div className="App">
      <Helmet>
        <title>Bee🐝</title>
        <meta name="Move fast ! " content="coding with bee ❤️ " />
      </Helmet>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <p>
      Bee🐝
      </p>
      </header>
    </div>
  );
}

export default App;
