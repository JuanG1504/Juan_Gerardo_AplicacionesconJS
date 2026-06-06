import { cargarMenu } from './menu.js'
import { getData } from './services/userService.js'
import './style.css'

const URL = 'https://jsonplaceholder.typicode.com/posts';
cargarMenu()
getData(URL)

  .then(posts => {

    let dataTable = posts.map(post => `
      <tr>
        <td>${post.id}</td>
        <td>${post.title}</td>
        <td>${post.body}</td>
      </tr>
    `).join('');

    let tableHTML = `

<div class="table-container">

  <table class="custom-table">

    <thead>
      <tr>
        <th>ID</th>
        <th>Título</th>
        <th>Contenido</th>
      </tr>
    </thead>

    <tbody>
      ${dataTable}
    </tbody>

  </table>

</div>
`;

    document.querySelector('#posts').innerHTML = tableHTML;

  })

  .catch(error => {
    console.error('Error al cargar posts:', error);
  });