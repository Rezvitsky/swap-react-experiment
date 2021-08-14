import IRoute from '../interfaces/route'

import Index from '../pages/Index'
import NotFound from '../pages/NotFound'

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Index',
        comonent: Index,
        exact: true
    },
    {
        path: '',
        name: 'NotFound',
        comonent: NotFound,
        exact: true
    }
]

export default routes