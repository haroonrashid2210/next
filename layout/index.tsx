import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from './index.module.scss'
import { useRouter } from 'next/router';
import Navbar from '../globals/components/navbar';
import Footer from '../globals/components/footer/Footer';

interface Props {
    children: any
}

const navItems = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Calls',
        link: '/calls'
    }
]

const Layout = ({children}: Props) => {
    return (
        <div className={styles.root}>
            <Navbar items={navItems}/>
            <div className={styles.container}>
                {children}
            </div>
            <Footer/>
        </div>
    )
}

export default Layout
