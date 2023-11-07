document.addEventListener("DOMContentLoaded", function() {
  const cellsWithEvent = document.querySelectorAll(".tem-evento");

  cellsWithEvent.forEach(cell => {
    cell.addEventListener("click", function() {
      // logica javascript aqui
      alert("Mostrar eventos para o dia " + cell.innerText);
    });
  });
});
