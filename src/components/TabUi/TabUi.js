import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';

import Loading from '../Loading/Loading';
import * as request from '~/services/getAnime';
import styles from './TabUi.module.scss';
import { FilmIcon } from '~/assets/Icon';
import { Button } from '~/components/Button';
import Videos from './Tabs/VideoComp/Video';
import News from './Tabs/NewComp/News';
import Characters from './Tabs/CharacterComp/Characters';
import Episodes from './Tabs/EpisodesComp/Episodes';
import { useSetType } from '~/hook';
const cx = classNames.bind(styles);
const tabs = [
   {
      tab: 'videos',
      name: 'Videos',
      element: (data) => {
         return <Videos data={data} />;
      },
   },
   {
      tab: 'episodes',
      name: 'Episodes',
      element: (data) => {
         return <Episodes data={data} />;
      },
   },
   {
      tab: 'characters',
      name: 'Character & Staff',
      element: (data) => {
         return <Characters data={data} />;
      },
   },
   {
      tab: 'news',
      name: 'News',
      element: (data) => {
         return <News data={data} />;
      },
   },
];
function TabUi({ id }) {
   console.log('tab ui render');
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const type = useSetType();
   // debugger;
   useEffect(() => {
      const fetchApi = async () => {
         const dataApi = await request.getMoreAnimeById(id, type.type);
         setData(dataApi);
         setLoading(false);
      };
      fetchApi();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id, type.type]);
   if (loading) {
      return <Loading />;
   } else {
      return (
         <div className={cx('wrapper')}>
            <h2 className={cx('tab-title')}>Selection</h2>
            <div className={cx('tab-ui')}>
               {tabs.map((item, index) => (
                  <Button
                     key={index}
                     leftIcon={<FilmIcon classname={cx('icon')} />}
                     primary
                     className={type.type === item.tab ? cx('btn-tab', { 'btn-active': true }) : cx('btn-tab')}
                     onClick={() => type.handleChangeTab(item.tab)}
                  >
                     {item.name}
                  </Button>
               ))}
            </div>
            <div>
               {tabs.map((tab) => {
                  if (type.type === tab.tab) {
                     return tab.element(data);
                  }
                  return null;
               })}
            </div>
         </div>
      );
   }
}
export default TabUi;
