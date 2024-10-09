import Link from 'next/link'
import React from 'react'
import { FaPlayCircle } from "react-icons/fa"
import styles from "./header.module.css"
const Header = () => {
    return (
        <header className={`${styles.header} container fluid`}>
            <div className={styles.headerWrapper}>
                <Link href="/" className={styles.logo}>
                    <FaPlayCircle /> NETFILMS
                </Link>
                <nav className={styles.navigationMenu}>
                    <Link href="/movies">Movies</Link>
                    <Link href="/series">Series</Link>
                    <Link href="/about">Kids </Link>
                </nav>
            </div>
        </header>
    )
}

export default Header