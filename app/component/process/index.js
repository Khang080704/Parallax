import classNames from 'classnames/bind';
import styles from './Process.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const cx = classNames.bind(styles);

function Process({ percent, icon, fortesName }) {
    return (
        <>
            <p className={cx('title')}>
                <FontAwesomeIcon icon={icon} style={{marginRight: "5px"}}/>
                {fortesName}
            </p>
            <div className={cx('process')} style={{ '--process-width': `${percent}%` }}>
                <span
                    style={{
                        color: 'white',
                        zIndex: 3,
                        position: 'relative',
                    }}
                >
                    {percent}%
                </span>
            </div>
        </>
    );
}
export default Process;
