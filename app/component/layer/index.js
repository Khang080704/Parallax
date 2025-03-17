'use client';

import classNames from 'classnames/bind';
import styles from './layer.module.css';
import { useState, useContext, createContext, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRemove } from '@fortawesome/free-solid-svg-icons';


const cx = classNames.bind(styles);
export const imgContext = createContext();

function Layer({ children }) {
    const [hidden, setHidden] = useState(false)
    const [imgUrl, setImgUrl] = useState(null)
    const [alt, setAlt] = useState('')

    useEffect(() => {
        const savedPosition = sessionStorage.getItem('scrollPosition')
        console.log(savedPosition)
        if(savedPosition) {
            window.scrollTo(0, parseInt(savedPosition))
        }
        
    }, [hidden])

    const handleHidden = () => {
        sessionStorage.setItem('scrollPosition', window.scrollY)
        setHidden(true)
    }

    const handleRemove = () => {
        setHidden(false)
    }

    return (
        <imgContext.Provider value={{handleHidden, setImgUrl, setAlt}}>
            {hidden ? (
                <div className={cx('modal')}>
                    <div className={cx('modal-overlay')} onClick={handleRemove}></div>
                    <div className={cx('img')}>
                        <img src={imgUrl} alt={alt}/>
                        <p className={cx('alt')}>{alt}</p> 
                    </div>
                    <div className={cx('remove')} onClick={handleRemove}>
                        <FontAwesomeIcon icon={faRemove} className={cx('remove-icon')}/>
                    </div>
                </div>
            ) : (
                children
            )}
        </imgContext.Provider>
    )
}

export default Layer;

