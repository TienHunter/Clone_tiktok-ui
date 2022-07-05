// import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

const cx = classNames.bind(styles);
function MenuItem({ title, to, icon, activeIcon }) {
   // const [activeItem, setActiveItem] = useState(false);
   // console.log('check active:  ', active);
   return (
      <NavLink
         className={({ isActive }) => cx('menu-item', { active: isActive })}
         to={to}
      >
         <span className={cx('unSelected')}>{icon}</span>
         <span className={cx('selected')}>{activeIcon}</span>
         <span className={cx('title')}>{title}</span>
      </NavLink>
   );
}

export default MenuItem;
