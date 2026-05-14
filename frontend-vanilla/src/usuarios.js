import { cargarMenu } from './menu.js'
import { getData } from './services/userService.js'
import './style.css'
const URL = 'https://jsonplaceholder.typicode.com/users';
cargarMenu()
getData(URL)
  .then(users => {

   
    let dataTable = users.map(item => `
      <tr>
        <td>${item.id}</td>
        <td>${item.name}</td>
        <td>${item.username}</td>
        <td>${item.email}</td>

        <!-- ejercicio -->
        <td>${item.address.city}</td>
        <td>${item.company.name}</td>
      </tr>
    `).join('');

     
    let tableHTML = `

<div class="table-container">

  <table class="custom-table">

    <thead>
      <tr>
        <th>ID</th>
        <th>Nombre</th>
        <th>Username</th>
        <th>Email</th>
        <th>Ciudad</th>
        <th>Compañía</th>
      </tr>
    </thead>

    <tbody>
      ${dataTable}
    </tbody>

  </table>

</div>
`;

 
    document.querySelector('#list').innerHTML = tableHTML;
  })

  .catch(error => {
    console.error('Error:', error);
  });