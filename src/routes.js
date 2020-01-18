import React from 'react';


const Dashboard = React.lazy(() => import('./views/Dashboard'));
const NasaImage = React.lazy(() => import('./views/NasaImage'));
const AboutMe = React.lazy(() => import('./views/AboutMe'));

// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'main', component: Dashboard },
  { path: '/nasaimage', name: 'nasa image', component: NasaImage },
  { path: '/aboutme', name: 'about me', component: AboutMe },
];

export default routes;
