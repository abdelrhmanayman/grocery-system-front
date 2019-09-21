import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux'

import App from './components/App'

import { configureStore } from './store/index'


class MainApp extends Component {
  render() {
    return (
      <Provider store={configureStore()}>
        <Router>
          <Switch>
            <Route path='/' component={App} />
          </Switch>
        </Router>
      </Provider>
    )
  }
}

export default MainApp
