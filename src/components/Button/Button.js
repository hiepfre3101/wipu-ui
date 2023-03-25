import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './Button.module.scss';

const cx = classNames.bind(styles);
function Button({
   children,
   className,
   to,
   href,
   leftIcon,
   rightIcon,
   onClick,
   roundXl,
   roundL,
   roundM,
   leftImg,
   primary = false,
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
      props.onClick = (e) => e.preventDefault();
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
      leftImg,
      leftIcon,
      rightIcon,
   });

   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         {children && <span className={cx('title')}>{children}</span>}
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}
Button.propTypes = {
   classname: PropTypes.string,
   to: PropTypes.string,
   href: PropTypes.string,
   leftIcon: PropTypes.element,
   rightIcon: PropTypes.element,
   onClick: PropTypes.func,
   roundXl: PropTypes.bool,
   roundL: PropTypes.bool,
   roundM: PropTypes.bool,
   leftImg: PropTypes.bool,
   primary: PropTypes.bool,
   small: PropTypes.bool,
   large: PropTypes.bool,
   nonBg: PropTypes.bool,
   disabled: PropTypes.bool,
   passProps: PropTypes.object,
};
export default Button;
