import React from 'react';
import { Home } from './component/home/home';
import { Detail } from './component/detail/detail';
const routes = [
    {
        path: '/',
        exact: true,
        main: () => <Home />
    },
    {
        path: '/detail/:id',
        exact: true,
        main: ({ match }) => <Detail match={match} />
    },
]

export default routes;