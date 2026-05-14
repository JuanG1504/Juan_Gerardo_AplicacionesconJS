import { getData } from './services/userService.js'
import { cargarMenu } from './components/menu.js'
import './style.css'

cargarMenu();

const URL = 'https://jsonplaceholder.typicode.com/users';

getData(URL)

  .then(users => {

    let dataTable = users.map(user => `
      <tr>
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
      </tr>
    `).join('');

    document.querySelector('#list').innerHTML = `
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          ${dataTable}
        </tbody>
      </table>
    `;
  })

  .catch(error => {
    console.error(error);
  });