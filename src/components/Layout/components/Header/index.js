import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faMagnifyingGlass,
   faSignIn,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless'; // different import path!

import styles from './Header.module.scss';
import images from '~/assets/image';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
const cx = classNames.bind(styles);
function Header() {
   const [searchResult, setSearchResult] = useState([]);
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, []);
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
            <div className={cx('action')}>
               <Button text type="medium">
                  Upload
               </Button>
               <Button primary rounded type="large">
                  Log in
               </Button>
               <Button
                  rounded
                  type="medium"
                  // leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                  // rightIcon={<FontAwesomeIcon icon={faSignIn} />}
               >
                  Register
               </Button>
            </div>
         </div>
      </header>
   );
}

export default Header;
