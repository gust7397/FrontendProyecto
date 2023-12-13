window.onload = function() {
  var modal = document.getElementById("modal");
  var openModalBtn = document.getElementById("open-modal-btn");
  var closeBtn = document.getElementsByClassName("close")[0];

  openModalBtn.onclick = function() {
    modal.style.display = "block";
  };

  closeBtn.onclick = function() {
    modal.style.display = "none";
  };
};
