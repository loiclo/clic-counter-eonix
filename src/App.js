import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import configureStore from './configureStore';
import history from './utils/history';
import Home from './containers/HomeContainer';
import styled from 'styled-components';

// Styled component for the title
const Title = styled.h1`
  text-align: center;
  margin-top: 50px;
`;

// Create redux store with history
const initialState = {};
const store = configureStore(initialState, history);

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Title>Clic Counter</Title> {/* Use the styled Title component here */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={() => (<h2>Page introuvable</h2>)} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default App;
