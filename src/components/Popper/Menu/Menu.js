import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!

import { Wrapper as PropperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';
import Header from './Header';

import styles from './Menu.module.scss';
import { useState } from 'react';
const cx = classNames.bind(styles);
const defaultFn = () => {};
function Menu({
   children,
   items = [],
   hideOnClick = false,
   onChange = defaultFn,
}) {
   const [history, setHistory] = useState([{ data: items }]);
   const current = history[history.length - 1];
   // console.log('check history:', history);
   // console.log('current : ', current);
   const renderItems = () => {
      return current.data.map((item, index) => {
         const isParent = !!item.children;
         return (
            <MenuItem
               key={index}
               data={item}
               onClick={() => {
                  if (isParent) {
                     setHistory((prev) => [...prev, item.children]);
                  } else {
                     onChange(item);
                  }
               }}
            />
         );
      });
   };
   const handleBack = () => {
      setHistory((prev) => prev.splice(prev.length - 1, 1));
   };
   const renderReult = (attrs) => (
      <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
         <PropperWrapper className={cx('menu-propper')}>
            {history.length > 1 && (
               <Header title={current.title} onBack={handleBack} />
            )}
            <div className={cx('menu-body')}>{renderItems()}</div>
         </PropperWrapper>
      </div>
   );
   // Reset to first menu
   const handleReset = () => {
      setHistory((prev) => prev.slice(0, 1));
   };
   return (
      <Tippy
         interactive={true}
         placement="bottom-end"
         delay={[0, 500]}
         offset={[16, 8]}
         hideOnClick={hideOnClick}
         render={renderReult}
         onHide={handleReset}
      >
         {children}
      </Tippy>
   );
}
Menu.propTypes = {
   children: PropTypes.node.isRequired,
   items: PropTypes.array,
   hideOnClick: PropTypes.bool,
   onChange: PropTypes.func,
};
export default Menu;
