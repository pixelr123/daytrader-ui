import React from 'react';
import { routes } from './app/core/routes';
import { Switch, Route } from 'react-router-dom';
import { Header } from './app/components/shared/Header';
import { Footer } from './app/components/shared/Footer';

function App() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

export default App;
