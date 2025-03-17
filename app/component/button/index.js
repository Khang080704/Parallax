import classNames from "classnames/bind"
import styles from './button.module.css'

const cx = classNames.bind(styles)

function Button({content}) {
    return (
        <button className={cx('btn')}>
            {content}
        </button>
    )
}

export default Button