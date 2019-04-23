import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav>
        <h2 className="logo"><a class="logo-link" href="#">Oscars 2019</a></h2>
        <ul className="nav-menu">
          <li><a className="nav-menu__link" href="#">Home</a></li>
          <li><a className="nav-menu__link" href="#">Best Actor</a></li>
          <li><a className="nav-menu__link" href="#">Best Actress</a></li>
          <li><a className="nav-menu__link" href="#">Best Films</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default App;
