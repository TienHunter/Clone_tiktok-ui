import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
   faCoins,
   faEarthAsia,
   faEllipsisVertical,
   faGear,
   faKeyboard,
   faQuestionCircle,
   faSignOut,
   faUser,
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css'; // optional
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import images from '~/assets/image';

import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
import routeConfig from '~/config/routes';
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
      // console.log(menuItem);
   };
   return (
      <header className={cx('wrapper')}>
         <div className={cx('content')}>
            <Link to={routeConfig.home} className={cx('logo')}>
               <img src={images.logo} alt="Tiktok" />
            </Link>
            {/* Search */}
            <Search />
            {/* action */}
            <div className={cx('action')}>
               {currentUser ? (
                  <>
                     <Tippy delay={[0, 200]} content="Upload video">
                        <button className={cx('action-btn')}>
                           <UploadIcon />
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 200]} content="message...">
                        <button className={cx('action-btn')}>
                           <MessageIcon />
                        </button>
                     </Tippy>
                     <Tippy delay={[0, 200]} content="inbox...">
                        <button className={cx('action-btn')}>
                           <InboxIcon />
                           <span className={cx('badge')}>12</span>
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
                     <Image
                        className={cx('user-avatar')}
                        src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/d5d7b58b1a7f01f757e6639d0f9aeb83~c5_100x100.jpeg?x-expires=1655956800&x-signature=8O4CqsQS8qfRfJJRuJyE%2Fp23w8E%3D"
                        alt="avatar"
                        fallback="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/97091734_1048543062213207_2809028836308549632_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_ohc=rJ81-76cC_wAX8M2IMl&_nc_ht=scontent.fhan14-1.fna&oh=00_AT-1R0NIKr3izzBmQ8anxzrr4z7r2IxJXoBbCI0jZ1wpFA&oe=62D965FA"
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
