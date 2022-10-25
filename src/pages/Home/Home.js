import { Hero } from '~/components/Hero';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { HomeContent } from '~/layout/HomeContent';
const cx = classNames.bind(styles);
function Home() {
   return (
      <div className={cx('wrapper')}>
         <Hero />
         <HomeContent/>
      </div>
   );
}

export default Home;
