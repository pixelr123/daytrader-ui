import React from 'react';
import { routes } from './app/core/routes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <Switch>
          {routes.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              component={route.component}
              exact={route.exact}
            />
          ))}
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
