import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import Navbar from "../globals/components/navbar";
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

const Home: NextPage = () => {

    const {pathname} = useRouter();

    return (
        <div style={{padding: 50}}>
            <Head>
                <title>Home</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                NextJs
            </div>

        </div>
    )
}

export default Home
