import { useEffect, useState, useRef } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import {
   faCircleXmark,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);

   const inputRef = useRef();

   useEffect(() => {
      setTimeout(() => {
         setSearchResult([1, 2, 3, 4]);
      }, 0);
   }, []);

   const handleClear = () => {
      setSearchValue('');
      inputRef.current.focus();
   };
   const handleHideResult = () => {
      setShowResult(false);
   };
   return (
      <HeadlessTippy
         interactive={true}
         visible={showResult && searchResult.length > 0} // customize show, hide tippy
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
         onClickOutside={handleHideResult}
      >
         <div className={cx('search')}>
            <input
               value={searchValue}
               placeholder="Search accounts or videos"
               spellCheck={false}
               onChange={(e) => setSearchValue(e.target.value)}
               onFocus={() => setShowResult(true)}
            />

            {!!searchValue && (
               <button className={cx('clean')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            <button className={cx('loading')}>
               <FontAwesomeIcon icon={faSpinner} />
            </button>
            <button className={cx('search-btn')}>
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
