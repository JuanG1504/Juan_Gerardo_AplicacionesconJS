export function getData(URL) {
  return fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar usuarios');
      return response.json();
    }); 
}