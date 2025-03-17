import classNames from 'classnames/bind';
import styles from './wrapper.module.css';

const cx = classNames.bind(styles);

function Wrapper({ children }) {
    return (
        <div className={cx('wrapper')}>
            {children}
        </div>
    );
}

export default Wrapper;
