document.addEventListener("DOMContentLoaded", () => {
  const nav = document.querySelector("#nav");
  const abrir = document.querySelector("#abrir");
  const cerrar = document.querySelector("#cerrar");

  if (abrir && cerrar && nav) {
    abrir.addEventListener("click", () => {
      mostrarMenu(true);
    });

    cerrar.addEventListener("click", () => {
      mostrarMenu(false);
    });

    document.addEventListener("click", (event) => {
      const isClickInsideNav = nav.contains(event.target);
      const isClickInsideAbrir = abrir.contains(event.target);

      if (!isClickInsideNav && !isClickInsideAbrir) {
        mostrarMenu(false);
      }
    });
  }

  function mostrarMenu(visible) {
    nav.classList.toggle("visible", visible);
  }
});
