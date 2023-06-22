import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';



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

                <div className={styles.searchContainer}>
                    <label htmlFor="searchArtist"></label>
                    <input type="searchArtist" placeholder='Qui souhaitez-vous écouter ?' />

                    <button>
                        <div className={styles.iconSearch}>
                            <FontAwesomeIcon icon={faSearch} />
                        </div>
                        Rechercher
                    </button>
                </div>

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