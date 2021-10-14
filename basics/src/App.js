import logo from './img/logo.svg';
import './css/App.css';
 

import MiComponente from './components/MiComponente';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
         ninoska  espinoza 
        </p>
      
      </header>
    <section className="components">

    <MiComponente/>

    </section>


    </div>
  );
}

export default App;
