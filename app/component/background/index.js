"use client";

import classNames from "classnames/bind"
import styles from './background.module.css'
import { useEffect, useRef } from "react"

const cx = classNames.bind(styles)

function Background({url, children}) {
    const backgroundRef = useRef(null)
    

    useEffect(() => {
        if(backgroundRef.current) {
            backgroundRef.current.style.backgroundImage = `url(${url})`
        }
    }, [])

    return (
        <div className={cx('background')} ref={backgroundRef}>
            {children}
        </div>
    )
}

export default Background