function getData(URL) {
  return fetch(URL)
    .then(response => {
      if (!response.ok) throw new Error('Error al cargar usuarios');
      return response.json();
    }); 
}

const URL= 'https://jsonplaceholder.typicode.com/users';

function testFetchUsers() {
  getData(URL)
    .then(users => {
      console.log('Usuarios obtenidos sin async/await:', users);
    })
    .catch(error => {
      console.error('Error en testFetchUsers:', error);
    });
}

testFetchUsers();
