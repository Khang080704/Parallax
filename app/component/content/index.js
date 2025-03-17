import classNames from 'classnames/bind';
import styles from './content.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import Process from '../process';
import { fortes } from '@/app/data/fortes';
import Wrapper from '../wrapper';

const cx = classNames.bind(styles);

function Content() {
    return (
        <Wrapper>
            <div className={cx('container')}>
                <h1 className={cx('about')}>ABOUT ME</h1>
                <p className={cx('hobbit')}>
                    <em>I love photography</em>
                </p>
                <p className={cx('desciption')}>
                    We have created a fictional personal website/blog, and our fictional character is a hobby
                    photographer. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
                    nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>

                <div className={cx('intro-container')}>
                    <div className={cx('intro-image')}>
                        <p className={cx('intro-image-tile')}>
                            <b>
                                <FontAwesomeIcon icon={faUser} className={cx('icon')} />
                                <span>My Name</span>
                            </b>
                        </p>
                        <img
                            src="https://www.w3schools.com/w3images/avatar_hat.jpg"
                            alt="img"
                            className={cx('image')}
                        />
                        
                    </div>

                    <div className={cx('present')}>
                        Welcome to my website. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor
                        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                        ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit
                        in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
                        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                        consequat.
                    </div>
                </div>
            </div>

            <p className={cx('main-skill')}>I'm really good at</p>

            {fortes.map((item, index) => {
                return (
                    <Process key={index} percent={item.percent} icon={item.icon} fortesName={item.fortesName}/>
                )
            })}
        </Wrapper>
    );
}

export default Content;
