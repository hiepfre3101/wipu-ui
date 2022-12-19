import classNames from 'classnames/bind';
import { useState } from 'react';
import { useEffect } from 'react';

import Loading from '../Loading/Loading';
import * as request from '~/services/getAnime';
import styles from './TabUi.module.scss';
import Episodes from './Tabs/EpisodesComp/Episodes';
import { useSetType } from '~/hook';
const cx = classNames.bind(styles);
function TabUi({ id}) {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);
   const type = useSetType();
   useEffect(() => {
      const fetchApi = async () => {
         const dataApi = await request.getAnimeById(id);
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
            <div>
              <Episodes data={data}  handleChangePage={type.handleChangePage} idAnime={id}/>
            </div>
         </div>
      );
   }
}
export default TabUi;
