import { Link } from 'react-router-dom';

import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import Image from '~/components/Image';
const cx = classNames.bind(styles);
function AccountItem({ data }) {
   let { full_name, avatar, tick, nickname } = data;
   // console.log(avatar);
   return (
      <Link to={`/@${nickname}`} className={cx('wrapper')}>
         <Image src={avatar} className={cx('avatar')} alt={nickname} />
         <div className={cx('infor')}>
            <p className={cx('name')}>
               <span>{full_name}</span>
               {tick && (
                  <FontAwesomeIcon
                     className={cx('check')}
                     icon={faCheckCircle}
                  />
               )}
            </p>
            <span className={cx('username')}>{nickname}</span>
         </div>
      </Link>
   );
}

export default AccountItem;
