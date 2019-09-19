import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider } from 'styled-components';
import Page from './components/Page'

import Home from './containers/Home'
import theme from './commons/theme'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThemeProvider theme={theme}>
          <Page>
            <BrowserRouter>
                <Switch>
                  <Route path="/" exact={true} component={() => <Home/>} />
                  <Route path="/sobre" component={() => <div>oi2</div>} />
                </Switch>
            </ BrowserRouter>
          </Page>
        </ThemeProvider>
      </div>
    );
  }
}

export default App;
