import classNames from 'classnames/bind';

import styles from './Episodes.module.scss';
import Loading from '~/components/Loading/Loading';
import { Button } from '~/components/Button';
import { useState } from 'react';

const cx = classNames.bind(styles);
function Episodes({ data, moreProps }) {
   const [episode, setEpisode] = useState(1);
   const propsEpisode = moreProps.find((item) => {
      return item.children === 'episodes';
   });
   const handleChangePage = propsEpisode.props.handleChangePage;
   if (Array.isArray(data.data) && data.pagination) {
      const quantityPage = data.pagination;
      const renderTab = () => {
         const tabs = [];
         for (let i = 0; i < quantityPage.last_visible_page; i++) {
            tabs.push(
               <Button primary className={cx('btn-tab')} onClick={() => handleChangePage(i + 1)}>
                  {i+1}
               </Button>,
            );
         }
         return tabs;
      };
      return (
         <div className={cx('wrapper')}>
            <div className={cx('title')}>Episode {episode}</div>
            <div className={cx('tab-page')}>{renderTab()}</div>
            <div className={cx('list-page')}>
               {data.data.map((item) => (
                  <Button small key={item.mal_id} className={cx('btn-page')} onClick={() => setEpisode(item.mal_id)}>
                     {item.mal_id}
                  </Button>
               ))}
            </div>
         </div>
      );
   } else {
      return <Loading />;
   }
}

export default Episodes;
