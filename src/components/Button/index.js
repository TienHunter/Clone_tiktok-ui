import classNames from 'classnames/bind';
import styles from './Button.module.scss';
import { Link } from 'react-router-dom';
const cx = classNames.bind(styles);

function Button({
   to,
   href,
   primary = false,
   outline = false,
   text = false,
   disable = false,
   rounded = false,
   className,
   type = 'medium',
   leftIcon,
   rightIcon,
   children,
   onClick,
   ...passProps
}) {
   console.log('checkonclick:', onClick);
   let Comp = 'button';
   const classes = cx('wrapper', {
      [className]: className,
      primary,
      outline,
      text,
      disable,
      rounded,
      [type]: type,
   });
   const props = {
      onClick,
      ...passProps,
   };
   if (disable) {
      //       Object.keys()
      // Trả về một mảng các tên thuộc tính đếm được của một object đã cho.
      Object.keys(props).forEach((key) => {
         if (key.startsWith('on') && typeof props[key] === 'function') {
            delete props[key];
         }
      });
   }
   if (to) {
      props.to = to;
      Comp = Link;
   } else if (href) {
      props.href = href;
      Comp = 'a';
   }
   return (
      <Comp className={classes} {...props}>
         {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
         <span className={cx('title')}>{children}</span>
         {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
      </Comp>
   );
}

export default Button;
