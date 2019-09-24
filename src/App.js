import React, { useState } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Page from './components/Page'

import Home from './containers/Home'
import Detail from './containers/Detail'
import theme from './commons/theme'

const App = () => {
  const [selectedTheme, setSelectedTheme] = useState('dark')
  const updatedTheme = {...theme, selectedTheme, setSelectedTheme}
  return (
    <div className="App">
      <ThemeProvider theme={updatedTheme} >
        <Page>
          <BrowserRouter>
              <Switch>
                <Route path="/" exact={true} component={() => <Home/>} />
                <Route path="/:id" component={() => <Detail />} />
              </Switch>
          </ BrowserRouter>
        </Page>
      </ThemeProvider>
    </div>
  );
}

export default App;
