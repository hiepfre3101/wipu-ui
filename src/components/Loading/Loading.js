import classNames from "classnames/bind";
import styles from './Loading.module.scss';
const cx = classNames.bind(styles);
function Loading() {
    return ( <div className={cx('wrapper')}>
        <div className={cx("loader")}>
            <p className={cx('loader--dot')}></p>
            <p className={cx('loader--dot')}></p>
            <p className={cx('loader--dot')}></p>
            <p className={cx('loader--dot')}></p>
            <p className={cx('loader--dot')}></p>
        </div>
    </div> );
}

export default Loading;