import Home from '~/pages/Home/Home';
import Popular from '~/pages/Popular/Popular';
import Genre from '~/pages/Genre/Genre';
const routes = [
   {
      path: '/',
      component: Home,
      name: 'Home',
   },
   {
      path: '/popular',
      component: Popular,
      name: 'Popular',
   },
   {
      path: '/genre',
      component: Genre,
      name: 'Genre',
   },
];

export default routes;
