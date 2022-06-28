import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!

// components
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import {
   faCircleXmark,
   faMagnifyingGlass,
   faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import styles from './Search.module.scss';
import { SearchIcon } from '~/components/Icons';
import { useDebounce } from '~/hooks';

// api
import * as searchService from '~/apiServices/searchService';

const cx = classNames.bind(styles);

function Search() {
   const [searchValue, setSearchValue] = useState('');
   const [searchResult, setSearchResult] = useState([]);
   const [showResult, setShowResult] = useState(true);
   const [loading, setLoading] = useState(false);

   const debounced = useDebounce(searchValue, 500);
   const inputRef = useRef();
   useEffect(() => {
      if (!debounced.trim()) {
         setSearchResult([]);
         return;
      }
      const fetchApi = async () => {
         setLoading(true);
         const result = await searchService.search(searchValue);
         setSearchResult(result);
         setLoading(false);
      };

      fetchApi();
   }, [debounced]);

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
                  {searchResult.map((result) => (
                     <AccountItem
                        key={result.id}
                        data={result}
                        onClick={() => {
                           setSearchValue('');
                        }}
                     />
                  ))}
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
               onChange={(e) =>
                  setSearchValue(
                     e.target.value[0] === ' ' ? '' : e.target.value,
                  )
               }
               onFocus={() => setShowResult(true)}
            />

            {!!searchValue && !loading && (
               <button className={cx('clean')} onClick={handleClear}>
                  <FontAwesomeIcon icon={faCircleXmark} />
               </button>
            )}
            {loading && (
               <button className={cx('loading')}>
                  <FontAwesomeIcon icon={faSpinner} />
               </button>
            )}
            <button
               className={cx('search-btn')}
               onMouseDown={(e) => e.preventDefault()}
            >
               <SearchIcon />
            </button>
         </div>
      </HeadlessTippy>
   );
}

export default Search;
