document.addEventListener("DOMContentLoaded", function() {
  const cellsWithEvent = document.querySelectorAll(".tem-evento");

  cellsWithEvent.forEach(cell => {
    cell.addEventListener("click", function() {
      // Aqui você pode implementar a lógica para exibir os eventos do dia
      alert("Mostrar eventos para o dia " + cell.innerText);
    });
  });
});
