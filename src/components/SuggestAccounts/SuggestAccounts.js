import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './SuggestAccounts.module.scss';
import AccountIten from './AccountIten';
const cx = classNames.bind(styles);

function SuggestAccounts({ label }) {
   return (
      <div className={cx('wrapper')}>
         <p className={cx('label')}>{label}</p>
         <AccountIten />
         <AccountIten />
         <AccountIten />

         <p className={cx('more-btn')}>See all</p>
      </div>
   );
}

SuggestAccounts.prototype = {
   label: PropTypes.string.isRequired,
};
export default SuggestAccounts;
