import type { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useDispatch } from 'react-redux'
import { reset } from '../../../redux/slicer'
import AuthenticationService from '../../../services/Authentication.service'
import styles from './index.module.scss'

interface Props {
    items: { name: string, link: string }[]
}

const Navbar: NextPage<Props> = ({ items }) => {

    const { pathname } = useRouter();
    const dispatch = useDispatch()

    function logout() {
        AuthenticationService.logout()
        dispatch(reset())
    }

    return (
        <nav className={styles.nav}>
            <ul>
                {items.map((item, i) => <li key={i} className={pathname === item.link ? styles.navActive : ''}><Link href={item.link}>{item.name}</Link></li>)}
            </ul>
            <div className={styles.logout} onClick={logout}>Logout</div>
        </nav>
    )
}

export default Navbar
