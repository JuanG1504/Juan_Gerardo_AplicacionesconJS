export function cargarMenu() {

  const menu = `
    <nav class="menu">

      <h2 class="logo">Frontend con Vanilla</h2>

      <ul class="menu-list">

        <li>
          <a href="/index.html">Home</a>
        </li>

        <li>
          <a href="/posts.html">Posts</a>
        </li>

        <li>
          <a href="/todos.html">Todos</a>
        </li>

        <li>
          <a href="/usuarios.html">Usuarios</a>
        </li>

        <li>
          <a href="/about.html">About</a>
        </li>

      </ul>

    </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", menu);
}