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
      tab: 'episodes',
      name: 'Episodes',
      element: (data, moreProps) => {
         return <Episodes data={data} moreProps={moreProps} />;
      },
      hasMoreProp: true,
   },
   {
      tab: 'videos',
      name: 'Trailers',
      element: (data) => {
         return <Videos data={data} />;
      },
      hasMoreProp: false,
   },

   {
      tab: 'characters',
      name: 'Character & Staff',
      element: (data) => {
         return <Characters data={data} />;
      },
      hasMoreProp: false,
   },
   {
      tab: 'news',
      name: 'News',
      element: (data) => {
         return <News data={data} />;
      },
      hasMoreProp: false,
   },
];
function TabUi({ id, countEpisode }) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const type = useSetType();

   // moreProps is an array has children component of TabUi. Each object is a component has more props need pass more props.
   // if you want to add prop to a child component of TabUi, add an object similar to the one below
   // note : value of key "children" have to uniqe, which represents the names of the child comps of TabUi.
   const moreProps = [
      {
         children: 'episodes',
         props: {
            countEpisode,
            handleChangePage: type.handleChangePage, 
         },
      },
   ];
   useEffect(() => {
      const fetchApi = async () => {
         const dataApi = await request.getMoreAnimeById(id, type.type, type.page);
         setData(dataApi);
         setLoading(false);
      };
      fetchApi();
      // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [id, type.type, type.page]);
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
                  if (type.type === tab.tab && tab.hasMoreProp) {
                     return tab.element(data, moreProps);
                  } else if (type.type === tab.tab && !tab.hasMoreProp) {
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
