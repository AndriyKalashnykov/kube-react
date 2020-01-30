import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='App'>
      <MetaTags>
        <title>Page 1</title>
        <meta http-equiv="refresh" content="35" ></meta>
      </MetaTags>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <p>
          <button onClick={refreshPage}>Click to reload!</button>
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
