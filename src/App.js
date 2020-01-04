import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, history } from './redux/store';


// import { renderRoutes } from 'react-router-config';
import './App.scss';

const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// Containers
const DefaultLayout = React.lazy(() => import('./containers/DefaultLayout'));

// Pages


class App extends Component {

  render() {
    return (
	  <Provider store={store}>
           
        
      <HashRouter>
          <React.Suspense fallback={loading()}>
            <Switch>
              
              <Route path="/" name="Home" render={props => <DefaultLayout {...props}/>} />
            </Switch>
          </React.Suspense>
      </HashRouter>
	    </Provider>
    );
  }
}

export default App;
