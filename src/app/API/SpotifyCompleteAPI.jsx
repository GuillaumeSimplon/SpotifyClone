// METHODE AXIOS
// const axios = require("axios");

// let apiKey = null;


// export async function getAPIKey() {
//     if (apiKey === null) {
//         await resetAPIKey ();
//     }
//     return apiKey
// }



// export async function resetAPIKey() {
//     axios.post("https://accounts.spotify.com/api/token",
//         `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`,
//         {
//             headers: {
//                 'Content-Type': 'application/x-www-form-urlencoded'
//             }
//         }).then(response => apiKey = response.data.access_token)
// }








//////////////////////////////////////////////////////////
// METHODE FETCH
let apiKey = null;

// Fonction pour obtenir la clé d'API
export async function getAPIKey() {
  if (apiKey === null) {
    await resetAPIKey();
  }
  return apiKey;
}

// Fonction pour réinitialiser la clé d'API
export async function resetAPIKey() {
  // Effectuer la requête POST vers l'API de Spotify pour obtenir la clé d'API
  await fetch('https://accounts.spotify.com/api/token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `grant_type=client_credentials&client_id=${process.env.SPOTIFY_CLIENT_ID}&client_secret=${process.env.SPOTIFY_CLIENT_SECRET}`
  })
  .then(response => {
    // Vérifier si la réponse est valide
    if (!response.ok) {
      throw new Error('Erreur lors de la requête');
    }
    // Extraire les données JSON de la réponse
    return response.json();
  })
  .then(data => {
    // Stocker la clé d'API dans la variable apiKey
    apiKey = data.access_token;
  })
  .catch(error => {
    console.error(error);
  });
}
