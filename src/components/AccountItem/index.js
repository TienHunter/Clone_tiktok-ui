import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem() {
   return (
      <div className={cx('wrapper')}>
         <Image
            src="https://p9-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/ce03b1088f9cbd74b331b16a00714200~c5_300x300.webp?x-expires=1655348400&x-signature=CKF9Mo8DnNRrbAoQakxbANSd2d0%3D"
            className={cx('avatar')}
            alt="Hooa"
         />
         <div className={cx('infor')}>
            <p className={cx('name')}>
               <span>Tieu Viem Tu</span>
               <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
            </p>
            <span className={cx('username')}>mydotoa</span>
         </div>
      </div>
   );
}

export default AccountItem;
