import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const NasaImage = React.lazy(() => import('./views/NasaImage'));


// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'main', component: Dashboard },
  { path: '/nasaimage', name: 'main', component: NasaImage },
];

export default routes;
