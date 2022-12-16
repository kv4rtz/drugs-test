import styles from '/styles/NavBar.module.scss'
import Container from "../general/Container";
import links from "./links";
import Link from "next/link";
import Head from "next/head";
import {useRouter} from "next/router";
import {FaTablets} from "react-icons/fa";

const NavBar = () => {
    const {pathname} = useRouter()

    return (
        <header className={styles.header}>
            <Head>
                <title>drugs - главная</title>
            </Head>
            <Container>
                <div className={styles['header-wrap']}>
                    <div className={styles['header-logo']}>
                        <FaTablets size={30} />Drugs
                    </div>
                    <nav>
                        <ul className={styles['nav-list']}>
                            {links.map((el, idx) => (
                                <li className={`${styles['nav-item']} ${pathname === el.path ? styles.active : ''}`} key={idx}><Link href={el.path}>{el.name}</Link></li>
                            ))}
                        </ul>
                    </nav>
                </div>
            </Container>
        </header>
    )
}

export default NavBar