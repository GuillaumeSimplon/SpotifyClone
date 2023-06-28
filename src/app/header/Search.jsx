'use client';
import styles from './header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import fetchSpotifyApi from '../API/SpotifyCompleteAPI';
import { useEffect } from 'react';

const Search = () => {
    const [search, setSearch] = useState('');

    const [searchResult, setSearchResult] = useState();
    useEffect(() => {
        async function fetchData() {
            const data = await fetchSpotifyApi(`search?q=${search}&type=artist&market=FR&limit=10&offset=5`);
            // console.log(search);
            setSearchResult(data);
        }

        fetchData();
    }, [search]);
    // console.log(searchResult);


    const handleSearchInput = (event) => {
        setSearch(event.target.value);
    };

    const handleSearchSubmit = async () => {
        const data = await fetchSpotifyApi(`search?q=${search}&type=artist&market=FR&limit=10&offset=5`);
        // console.log(data);
    };

    return (
        <div className={styles.searchContainer}>
            <label htmlFor="searchArtist"></label>
            <input type="text" placeholder='Qui souhaitez-vous écouter ?' onChange={handleSearchInput} />

            <button onClick={handleSearchSubmit}>
                <div className={styles.iconSearch}>
                    <FontAwesomeIcon icon={faSearch} />
                </div>
                Rechercher
            </button>
        </div>
    );
};

export default Search;
