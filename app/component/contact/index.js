import classNames from 'classnames/bind';
import styles from './contact.module.css';
import Wrapper from '../wrapper';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCoffee,
    faEnvelope,
    faMap,
    faMapMarked,
    faMapMarker,
    faPaperPlane,
    faPhone,
} from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function Contact() {
    return (
        
            <div className={cx('container')}>
                <h1 className={cx('about')}>WHERE I WORK</h1>
                <p className={cx('hobbit')}>
                    <em>Id love your feedback!</em>
                </p>

                <div className={cx('contact')}>
                    <div className={cx('contact__img')}>
                        <img src="https://www.w3schools.com/w3images/map.jpg" className={cx('contact__img-link')} />
                    </div>

                    <div className={cx('contact__block')}>
                        <div className={cx('contact__block-media')}>
                            <div className={cx('contact__blocl-media-item')}>
                                <FontAwesomeIcon icon={faMapMarker} className={cx('contact__block-media-icon')} />
                                <span className={cx('contact__blocl-media-item-content')}>Chicago, US</span>
                            </div>

                            <div className={cx('contact__blocl-media-item')}>
                                <FontAwesomeIcon icon={faPhone} className={cx('contact__block-media-icon')} />
                                <span className={cx('contact__blocl-media-item-content')}>Phone: +00 151515</span>
                            </div>

                            <div className={cx('contact__blocl-media-item')}>
                                <FontAwesomeIcon icon={faEnvelope} className={cx('contact__block-media-icon')} />
                                <span className={cx('contact__blocl-media-item-content')}>Email: mail@mail.com</span>
                            </div>
                        </div>
                        <p className={cx('contact__block-note')}>
                            Swing by for a cup of
                            <FontAwesomeIcon icon={faCoffee} />
                            ,or leave me a note:
                        </p>
                        <form>
                            <div className={cx('contact__block-user-info')}>
                                <div className={cx('contact__block-user-info__name')}>
                                    <input placeholder="Name" className={cx('input')} />
                                </div>
                                <div className={cx('contact__block-user-info__email')}>
                                    <input placeholder="Email" className={cx('input')} />
                                </div>
                            </div>

                            <div className={cx('contact__block-user-info__message')}>
                                <input placeholder="Message" className={cx('input')} />
                            </div>

                            <button className={cx('contact__block-submit')}>
                                <FontAwesomeIcon icon={faPaperPlane} className={cx('contact__block-submit-icon')} />
                                <span className={cx('contact__block-submit-text')}>SEND MESSAGE</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        
    );
}

export default Contact;
