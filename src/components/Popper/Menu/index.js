import classNames from 'classnames/bind';
import Tippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PropperWrapper } from '~/components/Popper';
import MenuItem from './MenuItem';

import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function Menu({ children, items = [] }) {
   const renderItems = () => {
      return items.map((item, index) => <MenuItem key={index} data={item} />);
   };
   return (
      <Tippy
         interactive={true}
         placement="bottom-end"
         delay={[0, 500]}
         render={(attrs) => (
            <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
               <PropperWrapper className={cx('menu-propper')}>
                  {renderItems()}
               </PropperWrapper>
            </div>
         )}
      >
         {children}
      </Tippy>
   );
}

export default Menu;
