import React from 'react';
import { Helmet } from 'react-helmet';
import logo from './logo.svg';
import './App.css';

function App() {

  function refreshPage() {
    window.location.reload(false);
  }

  return (
    <div className='App'>
      <Helmet>
        <title>My App</title>
        <meta charSet="utf-8" />
        <meta name="description" content="A React.js application" />
        <meta http-equiv="refresh" content="35"></meta>
      </Helmet>
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
