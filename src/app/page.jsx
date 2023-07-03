// 'use client'

import fetchSpotifyApi from '../app/API/SpotifyCompleteAPI';
import ArtistCard from '../app/Componants/ArtistCard';

export default async function Home() {
  // const artistId = '1y1PK1PL2dgNh0TwQTpZMU'
  // const data = await fetchSpotifyApi(`artists/${artistId}`);
  const data = await fetchSpotifyApi(`browse/new-releases?country=FR&limit=10&offset=0`);
  console.log(data.albums);


  const imageUrl = data.albums.images && data.albums.images[0] ? data.albums.images[0].url : null;
  const name = data.albums.name;
  const release_date = data.albums.release_date;

  return (
    <>
      <ArtistCard
        imageSrc={imageUrl}
        name={name}
        release_date={release_date}
      />
    </>
  )
}


