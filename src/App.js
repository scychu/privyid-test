import React from 'react';
import './App.css';
import Routes from './routes/Routes';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from "react-redux";
import store from "./store/index";
function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Routes/>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
