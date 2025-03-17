import classNames from "classnames/bind"
import styles from './footer.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { media } from "@/app/data/media"

const cx = classNames.bind(styles)

function Footer(){
    return (
        <div className={cx('container')}>
            <a href="#" className={cx('link-to-top')}>
                <FontAwesomeIcon icon={faArrowUp} className={cx('link-icon')}/>
                <span className={cx('link-text')}>To the top</span>
            </a>
            <div className={cx('media')}>
                {media.map((item, index) => {
                    return <FontAwesomeIcon icon={item} key={index} className={cx('icon-media')}/>
                })}
            </div>

            <p style={{color:'white'}}>
                Powered by  <a href="#" className={cx('link')}>w3.css</a>
            </p>
        </div>
    )
}

export default Footer