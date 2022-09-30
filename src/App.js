
import React from 'react';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import logo from './logo.svg';
import './App.css';
import Player from './Componernts/Player/Player';

// toast.configure()
function App() {

  return (
    <div className="App">
      <Player></Player>
    </div>
  );
}

export default App;
