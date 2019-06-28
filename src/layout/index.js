import React, { Suspense, lazy } from 'react';
import path from 'path';
import { HashRouter as Router, Switch, Route, Redirect  } from 'react-router-dom';
import ErrorBoundary from '@/components/ErrorBoundary';
// const requireRoutes = require.context('@/pages/',true,/\.js$/);
// const routes = requireRoutes.keys().map(file => {
//   const pathName = file.match(/(\/\w+)(?=\.js$)/)[0];
//   const filePath = file.replace(/^\.\//, '')
//   return ({
//     path: pathName,
//     component: lazy(()=>import(`@/pages/${filePath}`)),
//   })
// });
const routes =[
  {
    path: '/',
    component: lazy(()=>import(/* webpackChunkName: "home" */'@/pages/home/HomePage')),
  },
  {
    path: '/about',
    component: lazy(()=>import(/* webpackChunkName: "about" */'@/pages/about/AboutPage')),
  },
  {
    path: '/useState',
    component: lazy(()=>import(/* webpackChunkName: "useState" */'@/pages/hooks/useState')),
  },
]
function layout() {
  return (
    <ErrorBoundary>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            {
              routes.map(params => <Route key={params.path} exact {...params} />)
            }
          </Switch>
        </Suspense>
      </Router>
    </ErrorBoundary>
  );
}
export default layout;
