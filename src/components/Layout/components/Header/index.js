import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';

import styles from './Header.module.scss';
import images from '~/assets/image';
const cx = classNames.bind(styles);
function Header() {
   return (
      <header className={cx('wrapper')}>
         <div className={cx('content')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt="Tiktok" />
            </div>
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
            <div className={cx('action')}></div>
         </div>
      </header>
   );
}

export default Header;
