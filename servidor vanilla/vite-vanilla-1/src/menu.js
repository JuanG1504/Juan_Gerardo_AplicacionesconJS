export function cargarMenu() {
  const menu = `
    <nav>
      <ul>
        <a href="/index.html">Home</a>
        <a href="/alta.html">Alta</a>
        <a href="/listar.html">Listar</a>
        <a href="/about.html">About</a>
      </ul>
    </nav>
  `
  document.body.insertAdjacentHTML("afterbegin", menu)
}