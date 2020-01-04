import React, { Component, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import * as router from 'react-router-dom';
import Particles from 'react-particles-js';
import {
  Container, NavItem,
  NavLink
} from 'reactstrap';

import {
  AppAside,
  AppFooter,
  AppHeader,
  AppSidebar,
  AppSidebarFooter,
  AppSidebarForm,
  AppSidebarHeader,
  AppSidebarMinimizer,


  AppBreadcrumb2 as AppBreadcrumb,
  AppSidebarNav2 as AppSidebarNav,
} from '@coreui/react';
// sidebar nav config
import navigation from '../../_nav';
// routes config
import routes from '../../routes';

const DefaultAside = React.lazy(() => import('./DefaultAside'));
const DefaultFooter = React.lazy(() => import('./DefaultFooter'));
const DefaultHeader = React.lazy(() => import('./DefaultHeader'));

class DefaultLayout extends Component {

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  signOut(e) {
    e.preventDefault()
    this.props.history.push('/login')
  }

  render() {
    return (
      <div className="app">
        <AppHeader fixed>
          <Suspense fallback={this.loading()}>
            <DefaultHeader onLogout={e => this.signOut(e)} />
          </Suspense>
        </AppHeader>
        <div className="app-body">
          <AppSidebar fixed offCanvas>

            <NavItem>
              <NavLink
                onClick={() => {
                  this.props.history.push('/nasaimage')
                }}>
                Today Nasa Image
              </NavLink>
            </NavItem>
          </AppSidebar>

          <main className="main">
            <AppBreadcrumb appRoutes={routes} router={router} />
            <Container fluid>
              <Suspense fallback={this.loading()}>
                <Switch>
                  {routes.map((route, idx) => {
                    return route.component ? (
                      <Route
                        key={idx}
                        path={route.path}
                        exact={route.exact}
                        name={route.name}
                        render={props => (
                          <route.component {...props} />
                        )} />
                    ) : (null);
                  })}
                  <Redirect from="/" to="/dashboard" />
                </Switch>
              </Suspense>
            </Container>
            <Particles
              params={{
                "particles": {
                  "number": {
                    "value": 160,
                    "density": {
                      "enable": true
                    }
                  },
                  "size": {
                    "value": 2,
                    "random": true
                  },
                  "move": {

                    "random": true,
                    "speed": 0.7,
                    "direction": "top",
                    "out_mode": "out"

                  },
                  "line_linked": {
                    "enable": false
                  }
                },
                // "interactivity": {
                //     "events": {
                //         "onhover": {
                //             "enable": true,
                //             "mode": "push"
                //         }
                //     },
                //     "modes": {
                //       "push": {
                //         "particles_nb": 10
                //     }
                //     }
                // }
              }}

            />
          </main>
          <AppAside fixed>
            <Suspense fallback={this.loading()}>
              <DefaultAside />
            </Suspense>
          </AppAside>
        </div>
        <AppFooter>
          <Suspense fallback={this.loading()}>
            <DefaultFooter />
          </Suspense>
        </AppFooter>
      </div>
    );
  }
}

export default DefaultLayout;
