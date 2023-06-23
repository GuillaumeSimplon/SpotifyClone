import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Search from './Search';




export default function Header() {
    return (
        <>
            <nav className={styles.navbarSpotify}>

                <div className={styles.homeContainer}>
                    <div className={styles.iconHome}>
                        <FontAwesomeIcon icon={faHome} />
                    </div>
                    <Link href="/">YFITOPS</Link>
                </div>

                <Search />

                <div className={styles.userContainer}>
                    <ul>
                        <li><Link href="#">S'inscrire</Link></li>
                        <li><Link href="#">Se connecter</Link></li>
                    </ul>
                </div>

            </nav>
        </>
    )
}
