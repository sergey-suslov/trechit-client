import React, {Fragment} from 'react'
import {Route, Switch} from 'react-router-dom'
import Dashboard from '../dashboard'
import RefreshTokenService from '../wrappers/refresh-token-service'
import PrivateRoute from '../routing/private-route'
import Socket from '../../socket'

export default () => (
  <RefreshTokenService>
    <PrivateRoute
      component={() => (
        <Fragment>
          <Socket />
          <Switch>
            <Route path="/app" render={Dashboard}/>
          </Switch>
        </Fragment>
      )}
    />
  </RefreshTokenService>
)
