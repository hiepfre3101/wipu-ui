import Home from '~/pages/Home/Home';
import Popular from '~/pages/Popular/Popular';
import Genre from '~/pages/Genre/Genre';
const routes = [
   {
      path: '/',
      component: Home,
   },
   {
      path: '/popular',
      component: Popular,
   },
   {
      path: '/genre',
      component: Genre,
   },
];

export default routes;
