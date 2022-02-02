const protocol = 'https://';
const host = 'pokeapi.co/api/v2/';
const getResource = (resource, id = null, params = '') => {
  const API_URL = id ? `${protocol}${host}${resource}/${id}/${params}` : `${protocol}${host}${resource}/${params}`;
  return fetch(API_URL)
    .then((resp) => {
      if (resp.status === 200) {
        return resp.json();
      }
      return { error: 'Error 404' };
    });
};
export default getResource;
