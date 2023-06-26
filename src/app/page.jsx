// 'use client'

import fetchSpotifyApi from '../app/API/SpotifyCompleteAPI';


export default async function Home() {

  // const data = await fetchSpotifyApi(`browse/new-releases?country=FR&limit=10&offset=0`)
  const data = await fetchSpotifyApi(`artists/1y1PK1PL2dgNh0TwQTpZMU/top-tracks?market=FR`)
  console.log(data);
  
  if (data && data.albums && data.albums.items) {
    data.albums.items.map(album => {
      album.artists.map(artist => {
        console.log(artist)
      })
    })
  }
  return (
    <>
      {/* <body className={styles.bodySpotify}></body> */}

    </>
  )
}
