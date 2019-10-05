import React from 'react'
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import { Route, Switch } from 'react-router-dom'
// import { Redirect } from 'react-router-dom'
import routers from './router/index.js';
import Layouts from './views/layout';
// import NotFound from '@/components/NotFound';

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      {/* HashRouter： http://localhost:3002/404 -> http://localhost:3002/#/404 */}
      {/* <BrowserRouter> */}
        <Switch>
          <Layouts>
            {routers.map((r, key) => (
              <React.Fragment key={key + r}>
                <Route
                  component={r.component}
                  exact={!!r.exact}
                  // exact
                  key={key + r}
                  path={r.path}
                />
                {/* <Route component={NotFound} /> */}
                {/* 这边有问题，Link方式路由跳转都会跳到404页面 */}
                {/* <Redirect from="*" to="/404" /> */}
              </React.Fragment>
            ))}
          </Layouts>
        </Switch>
      {/* </BrowserRouter> */}
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App

