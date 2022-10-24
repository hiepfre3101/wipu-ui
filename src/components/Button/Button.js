import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
   children,
   className,
   to,
   href,
   leftIcon,
   rightIcon,
   onlyIcon,
   onClick,
   roundXl,
   roundL,
   roundM,
   leftImg,
   primary=false,
   small = false,
   large = false,
   nonBg = false,
   disabled,
   ...passProps
}) {
   const props = {
      onClick,
      ...passProps,
   };
   if (disabled) {
      delete props.onClick;
   }
   let Comp = 'button';
   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }
   const classes = cx('wrapper', {
      [className]: className,
      roundXl,
      roundL,
      roundM,
      primary,
      small,
      large,
      nonBg,
      disabled,
      leftImg
   });

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         {onlyIcon && <span className={cx('icon')}>{onlyIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
