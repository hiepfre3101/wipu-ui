/* eslint-disable jsx-a11y/iframe-has-title */
import classNames from 'classnames/bind';

import styles from './ErrorPage.module.scss';

const cx = classNames.bind(styles);
function ErrorPage(error) {
   return (
      <div className={cx('wrapper')}>
       <div className={cx('text-wrap')}>
       <h1 className={cx('text-animation')}>whoops
          <div className={cx('animation')}>
                 <p className={cx('dot')}>.</p>
                 <p className={cx('dot')}>.</p>
                 <p className={cx('dot')}>.</p>
           </div>
       </h1>
           
            <h1>some thing went wrong !</h1>
       </div>
      </div>
   );
}

export default ErrorPage;
