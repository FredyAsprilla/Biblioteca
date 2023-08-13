const botonCambiarEstilo = document.getElementById("cambiarEstilo");

botonCambiarEstilo.addEventListener("click", () => {
    const body = document.body;
    body.classList.toggle("dark-theme");
});