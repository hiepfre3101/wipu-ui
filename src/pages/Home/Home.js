import { Hero } from '~/components/Hero';
import classNames from 'classnames/bind';
import styles from './Home.module.scss';
import { SeasonContent } from '~/components/SeasonContent';
import { TopContent } from '~/components/TopContent';
const cx = classNames.bind(styles);
function Home() {
   console.log('home render')
   return (
      <div className={cx('wrapper')}>
         <Hero />
        <SeasonContent/>
        
        <TopContent/>
      </div>
   );
}

export default Home;
