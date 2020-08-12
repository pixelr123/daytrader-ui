import React from 'react';
import { Routes } from './app/core/routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      Testing Done
      <BrowserRouter>
        <Switch>
          {Routes.map((route, index) => (
            <Route key={index} />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
