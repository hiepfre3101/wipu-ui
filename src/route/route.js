import Home from '~/pages/Home/Home';
import Popular from '~/pages/Popular/Popular';
import Genre from '~/pages/Genre/Genre';
import Watch from '~/pages/Watch/Watch';
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
   {
      path: '/watch',
      component: Watch,
      name: 'Watch',
   },
];

export default routes;
