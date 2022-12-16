import styles from '/styles/Layout.module.scss'
import NavBar from "../NavBar/NavBar";
import Head from "next/head";

const Layout = ({children}) => {
    return (
        <>
            <Head>
                <link href="https://fonts.googleapis.com/css2?family=Mulish:wght@400;700&display=swap" rel="stylesheet" />
            </Head>
            <NavBar />
            <main>{children}</main>
            <div className={styles['bg-blur']}></div>
            <footer>footer</footer>
        </>
    )
}

export default Layout