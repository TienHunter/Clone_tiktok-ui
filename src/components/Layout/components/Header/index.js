import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!

import styles from './Header.module.scss';
import images from '~/assets/image';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
const cx = classNames.bind(styles);
function Header() {
   const [searchResult, setSearchResult] = useState([]);
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3]);
      }, 0);
   }, []);
   console.log(searchResult, searchResult.length);
   return (
      <header className={cx('wrapper')}>
         <div className={cx('content')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt="Tiktok" />
            </div>

            <Tippy
               interactive={true}
               visible={searchResult.length > 0} // customize show, hide tippy
               placement="bottom"
               render={(attrs) => (
                  <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                     <PropperWrapper>
                        <h4 className={cx('search-title')}>Account</h4>
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                        <AccountItem />
                     </PropperWrapper>
                  </div>
               )}
            >
               <div className={cx('search')}>
                  <input
                     placeholder="Search accounts or videos"
                     spellCheck={false}
                  />

                  <button className={cx('clean')}>
                     <FontAwesomeIcon icon={faCircleXmark} />
                  </button>
                  <button className={cx('loading')}>
                     <FontAwesomeIcon icon={faSpinner} />
                  </button>
                  <button className={cx('search-btn')}>
                     <FontAwesomeIcon icon={faMagnifyingGlass} />
                  </button>
               </div>
            </Tippy>
            <div className={cx('action')}></div>
         </div>
      </header>
   );
}

export default Header;
