import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import styles from './Footer.module.scss'

const Footer = () => {
    return (
        <footer className={styles.footer}>&copy; {new Date().getFullYear()}</footer>
    )
}

export default Footer
