import { cargarMenu } from './menu.js'
import { getData } from './services/userService.js'
import './style.css'

const URL = 'https://jsonplaceholder.typicode.com/todos';
cargarMenu()
getData(URL)

  .then(todos => {

    let dataTable = todos.map(todo => `
      <tr>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>${todo.completed ? 'Completado' : 'Pendiente'}</td>
      </tr>
    `).join('');

    let tableHTML = `

<div class="table-container">

  <table class="custom-table">

    <thead>
      <tr>
        <th>ID</th>
        <th>Tarea</th>
        <th>Estado</th>
      </tr>
    </thead>

    <tbody>
      ${dataTable}
    </tbody>

  </table>

</div>
`;

    document.querySelector('#todos').innerHTML = tableHTML;

  })

  .catch(error => {
    console.error('Error al cargar todos:', error);
  });