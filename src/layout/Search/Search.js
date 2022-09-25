import classNames from "classnames/bind";
import { GlassIcon } from "~/assets/Icon";



import styles from '../Header/Header.module.scss';

const cx = classNames.bind(styles);

function Search() {
    return ( <form className={cx('search-block')}>
        <input type="text"  className={cx('input')} placeholder={'Search...'}/>
        <GlassIcon classname={cx('icon-glass')}/>
    </form> );
}

export default Search;