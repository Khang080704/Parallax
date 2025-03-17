'use client';

import clsx from 'clsx';
import styles from './header.module.css';
import { menuItem } from '@/app/data/menu';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import Tippy from '@tippyjs/react/headless';

import { dataForMobile } from '@/app/data/menu';

function Header() {
    function handleExits() {
        const position = window.pageYOffset;
        if (headerRef.current) {
            if (position > 200) {
                headerRef.current.classList.add(clsx(styles.animation));
            } else {
                headerRef.current.classList.remove(clsx(styles.animation));
            }
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            handleExits();
        });

        return () => {
            window.removeEventListener('scroll', (e) => {
                handleExits();
            });
        };
    });

    const [tippy, setTippy] = useState(false);
    const [menuBox, setMenuBox] = useState(false)

    function handleTippy() {
        setTippy(!tippy);
        setMenuBox(!menuBox)
    }

    const headerRef = useRef();
    const barsRef = useRef();

    return (
        <header className={clsx(styles.wrapper)} ref={headerRef}>
            <ul className={clsx(styles.menu)}>
                <li className={clsx(styles.item)}>
                    <a className={clsx(styles.link)}>HOME</a>
                </li>
                {menuItem.map((item, index) => {
                    return (
                        <li key={index} className={clsx(styles.item, styles.iconLink)}>
                            {item.icon && <FontAwesomeIcon icon={item.icon} className={clsx(styles.icon)} />}
                            <a className={clsx(styles.link)}>{item.title}</a>
                        </li>
                    );
                })}
            </ul>

            <div className={clsx(styles.search)}>
                <FontAwesomeIcon icon={faSearch} className={clsx(styles.SearchIcon)} />
            </div>

            <div className={clsx(styles.navBars, tippy && styles.barsIsActive)} onClick={handleTippy} ref={barsRef}>
                <FontAwesomeIcon icon={faBars} className={clsx(styles.BarsIcon)} />
            </div>
            <ul className={clsx(styles.tippyBox)} hidden={!menuBox}>
                {dataForMobile.map((data, index) => {
                    return <li className={clsx(styles.mobileMenuItem)}>{data}</li>;
                })}
            </ul>
        </header>
    );
}

export default Header;
