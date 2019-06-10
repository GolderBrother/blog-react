import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch, Redirect, HashRouter } from 'react-router-dom'
import routers from './router/index.js';
import Layouts from './views/layout';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      {/* HashRouter： http://localhost:3002/404 -> http://localhost:3002/#/404 */}
      {/* <HashRouter> */}
        <Switch>
          <Layouts>
            {routers.map((r, key) => (
              <Route
                component={r.component}
                exact={!!r.exact}
                key={key}
                path={r.path}
              />
            ))}
            {/* <Redirect from="*" to="/404" /> */}
          </Layouts>
        </Switch>
      {/* </HashRouter> */}
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App

