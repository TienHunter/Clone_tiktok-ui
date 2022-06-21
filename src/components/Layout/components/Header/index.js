import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCircleXmark,
   faCloudArrowUp,
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faMagnifyingGlass,
   faQuestionCircle,
   faSignIn,
   faSignOut,
   faSpinner,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless'; // different import path!
import 'tippy.js/dist/tippy.css'; // optional

import styles from './Header.module.scss';
import images from '~/assets/image';
import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
const cx = classNames.bind(styles);

const MENU_ITEMS = [
   {
      icon: <FontAwesomeIcon icon={faEarthAsia} />,
      title: 'English',
      children: {
         title: 'Language',
         data: [
            {
               type: 'language',
               code: 'en',
               title: 'English',
            },
            {
               type: 'language',
               code: 'vi',
               title: 'Tiếng Việt',
            },
         ],
      },
   },
   {
      icon: <FontAwesomeIcon icon={faQuestionCircle} />,
      title: 'Feedback and help',
      to: '/feedback',
   },
   {
      icon: <FontAwesomeIcon icon={faKeyboard} />,
      title: 'Keyboard shortcuts',
   },
];
function Header() {
   const [searchResult, setSearchResult] = useState([]);
   useEffect(() => {
      setTimeout(() => {
         setSearchResult([]);
      }, 0);
   }, []);
   const currentUser = true;
   const userMenu = [
      {
         icon: <FontAwesomeIcon icon={faUser} />,
         title: 'View profile',
         to: '/profile',
      },
      {
         icon: <FontAwesomeIcon icon={faCoins} />,
         title: 'Get coin',
         to: '/coin',
      },
      {
         icon: <FontAwesomeIcon icon={faGear} />,
         title: 'Setting',
         to: '/setting',
      },
      ...MENU_ITEMS,
      {
         icon: <FontAwesomeIcon icon={faSignOut} />,
         title: 'Log out',
         to: '/logout',
         borderTop: true,
      },
   ];
   //handle logic
   const handleMenuChange = (menuItem) => {
      console.log(menuItem);
   };
   return (
      <header className={cx('wrapper')}>
         <div className={cx('content')}>
            <div className={cx('logo')}>
               <img src={images.logo} alt="Tiktok" />
            </div>

            <HeadlessTippy
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
            </HeadlessTippy>
            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video">
                        <button className={cx('action-btn')}>
                           <FontAwesomeIcon icon={faCloudArrowUp} />
                        </button>
                     </Tippy>
                  </>
               ) : (
                  <>
                     <Button text type="medium">
                        Upload
                     </Button>
                     <Button primary type="medium">
                        Log in
                     </Button>
                     {/* <Button
                     rounded
                     type="medium"
                     // leftIcon={<FontAwesomeIcon icon={faSignIn} />}
                     // rightIcon={<FontAwesomeIcon icon={faSignIn} />}
                  >
                     Register
                  </Button> */}
                  </>
               )}
               <Menu
                  items={currentUser ? userMenu : MENU_ITEMS}
                  onChange={handleMenuChange}
               >
                  {currentUser ? (
                     <img
                        className={cx('user-avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1655956800&x-signature=8O4CqsQS8qfRfJJRuJyE%2Fp23w8E%3D"
                        alt="avatar"
                     />
                  ) : (
                     <button className={cx('more-btn')}>
                        <FontAwesomeIcon icon={faEllipsisVertical} />
                     </button>
                  )}
               </Menu>
            </div>
         </div>
      </header>
   );
}

export default Header;
