// 'use client'

import fetchSpotifyApi from '../app/API/SpotifyCompleteAPI';
import ArtistCard from '../app/Componants/ArtistCard';

export default async function Home() {


  // const data = await fetchSpotifyApi(`artists/1y1PK1PL2dgNh0TwQTpZMU/top-tracks?market=FR`)

  // if (data && data.albums && data.albums.items) {
  //   data.albums.items.map(album => {
  //     album.artists.map(artist => {
  //     })
  //   })
  // }


  return (
    <>
      {/* <body className={styles.bodySpotify}></body> */}
      <ArtistCard />
    </>
  )
}
