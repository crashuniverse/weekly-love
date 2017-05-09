import config from '../../config/config';

const getImage = (images) => {
  const imageLarge = images.filter(image => image.size === 'large');
  return images &&
    imageLarge &&
    imageLarge[0] &&
    imageLarge[0]['#text'];
};

const api = (username) => {
  const url = `https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=${username}&api_key=${config.apiKey}&format=json`;
  return fetch(url)
    .then(response => response.json())
    .then((json) => {
      const trackRaw = json &&
        json.weeklytrackchart &&
        json.weeklytrackchart.track &&
        json.weeklytrackchart.track[0];
      const track = Object.assign({}, {
        name: trackRaw.name,
        playcount: trackRaw.playcount,
        url: trackRaw.url,
        artist: trackRaw.artist['#text'],
        image: getImage(trackRaw.image),
      });
      return track;
    })
    .catch((error) => {
      // eslint-disable-next-line no-console
      console.error(error);
    });
};

export default api;
