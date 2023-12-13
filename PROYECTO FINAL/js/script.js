var modal = document.getElementById("myModal");
var modalImage = document.getElementById("modal-image");
var currentIndex = 0;

function openModal(index) {
  currentIndex = index;
  modal.style.display = "block";
  modalImage.src = document.getElementsByClassName("image")[index].getElementsByTagName("img")[0].src;
}

function closeModal() {
  modal.style.display = "none";
}

function changeImage(n) {
  currentIndex += n;
  var images = document.getElementsByClassName("image");
  if (currentIndex >= images.length) {
    currentIndex = 0;
  } else if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }
  modalImage.src = images[currentIndex].getElementsByTagName("img")[0].src;
}
