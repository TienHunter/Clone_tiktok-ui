import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

import styles from './SuggestAccounts.module.scss';
const cx = classNames.bind(styles);

const AccountIten = () => {
   return (
      <div className={cx('account-item')}>
         <img
            className={cx('avatar')}
            src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-aiso/65d3c6b1d1e205c75536ccf1f26d552d~c5_100x100.jpeg?x-expires=1662789600&x-signature=TCyDud4U%2FVgCNFeTCK0JvuSSOGw%3D"
            alt=""
         />
         <div className={cx('item-infor')}>
            <p className={cx('nickname')}>
               <strong>hunterDxD</strong>
               <FontAwesomeIcon
                  className={cx('check-icon')}
                  icon={faCheckCircle}
               />
            </p>
            <p className={cx('name')}>Tien hunter</p>
         </div>
      </div>
   );
};
AccountIten.prototype = {};
export default AccountIten;
