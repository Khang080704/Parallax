'use client';

import classNames from 'classnames/bind';
import styles from './work.module.css';
import { useContext } from 'react';

import Wrapper from '../wrapper';
import { myWork } from '@/app/data/work';
import Button from '../button';
import { imgContext } from '../layer';


const cx = classNames.bind(styles);

function Work() {
    const imgRef = useContext(imgContext)
    

    function handleClick(e) {
        imgRef.handleHidden()
        console.log(e.target)
        imgRef.setImgUrl(e.target.src)
        imgRef.setAlt(e.target.alt)
    }

    return (
        <Wrapper>
            <h1 className={cx('title')}>MY WORK</h1>
            <p className={cx('note')}>
                <em>
                    Here are some of my latest lorem work ipsum tipsum.
                    <br />
                    Click on the images to make them bigger
                </em>
            </p>
            <br></br>
            <div className={cx('grid')}>
                <div className={cx('row')}>
                    {myWork.map((work, index) => {
                        return (
                            <div key={index} className={cx('col', 'l-3', 'm-3', 'c-12')}>
                                <img
                                    src={work.url}
                                    alt={work.alt}
                                    className={cx('img')}
                                    onClick={(e) => handleClick(e)}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '64px' }}>
                <Button content={'LOAD MORE'} />
            </div>
        </Wrapper>
    );
}

export default Work;
