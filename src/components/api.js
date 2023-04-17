const API_KEY = '33559977-5d8a81e40738ffd9c726fd9c1';

export const fetchImages = (query, page) => {
  const url = `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;
  return fetch(url)
    .then(response =>
      response.ok ? response.json() : Promise.reject(response)
    )
    .then(data => data.hits);
};
