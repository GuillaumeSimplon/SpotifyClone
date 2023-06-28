// 'use client';
// import styles from './card.module.scss';



//   const artistCard = () => {
//     return (
//       <div className={styles.cardList}>
//         <img src="#" alt="Artiste" />
//         <h2>ARTISTE</h2>
//         <p>Description de l'artiste</p>
//       </div>
//     );
//   };
// export default artistCard;



import fetchSpotifyApi from "../API/SpotifyCompleteAPI";
export default async function  ArtistCard () {
  const data = await fetchSpotifyApi (`artists/0TnOYISbd1XYRBk9myaseg`);
  console.log(data);

  const newReleases = data.artist.name

     return (
      <div>
     { newReleases.map(item => (
        <p>{item.name}</p>
      ))}
      </div>
    );
}











// 'use client';
// import { useState, useEffect } from 'react';
// import styles from './card.module.scss';
// import fetchSpotifyApi from '../API/SpotifyCompleteAPI';

// const ArtistCard = () => {
//   const [imageSrc, setImageSrc] = useState('');
//   const [title, setTitle] = useState('ARTISTE');
//   const [description, setDescription] = useState('Description de l\'artiste');
  
//   const search = 'example'; // Définir la valeur de recherche appropriée

//   const updateArtistData = async () => {
//     try {
//       const data = await fetchSpotifyApi(`search?q=${search}&type=artist&market=FR&limit=10&offset=5`);

//       if (data) {
//         setImageSrc(data.imageSrc);
//         setTitle(data.title);
//         setDescription(data.description);
//       }
//     } catch (error) {
//       // Gérer l'erreur de manière appropriée
//     }
//   };

//   useEffect(() => {
//     updateArtistData();
//   }, []); // Appelez cette fonction lorsque le composant est monté pour récupérer les données initiales de l'artiste.

//   return (
//     <div className={styles.cardList}>
//       <img src={imageSrc} alt="Artiste" />
//       <h2>{title}</h2>
//       <p>{description}</p>
//     </div>
//   );
// };

// export default ArtistCard;






// 'use client';
// import React, { useEffect, useState } from 'react';
// import fetchSpotifyApi from '../API/SpotifyCompleteAPI';
// import styles from './card.module.scss';

// const ArtistCard = () => {
//   const [artistData, setArtistData] = useState(null);

//   useEffect(() => {
//     const fetchArtistData = async () => {
//       const data = await fetchSpotifyApi('/artists/0TnOYISbd1XYRBk9myaseg'); // Remplacez {artistId} par l'ID de l'artiste souhaité

//       // Effectuez ici le traitement des données récupérées
//       if (data) {
//         const { name, description, image } = data; // Remplacez "name", "description" et "image" par les propriétés correspondantes dans la réponse de l'API

//         // Mettez à jour l'état avec les données de l'artiste
//         setArtistData({
//           name,
//           description,
//           image,
//         });
//       }
//     };

//     fetchArtistData();
//   }, []);

//   if (!artistData) {
//     return null; // Ou affichez un indicateur de chargement
//   }

//   return (
//     <div className={styles.cardList}>
//       <img src={artistData.image} alt="Artiste" />
//       <h2>{artistData.name}</h2>
//       <p>{artistData.description}</p>
//     </div>
//   );
// };

// export default ArtistCard;
