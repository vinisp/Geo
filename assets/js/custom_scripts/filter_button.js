const $modalContainer = document.querySelector("#modalContainer");

function showModal(modalID) {
    const $modal = document.getElementById(modalID);
    $modal.classList.add("modalMostrar");
    console.log($modalContainer)
    $modal.addEventListener("click", (e) => {
      //$modal.classList.remove("modalMostrar");
      e.target.className === "btnModal" || e.target.id === modalID || e.target.id === "cancelarFiltro"
        ? $modal.classList.remove("modalMostrar")
        : false;
    });
  }