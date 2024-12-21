const dropContainer = document.getElementById("image-drop");

dropContainer.addEventListener("dragenter", function (event) {
  console.log(event);
  dropContainer.style.backgroundColor = "white";
  event.preventDefault();
});

dropContainer.addEventListener("dragend", function (event) {
  console.log(event);
  dropContainer.style.backgroundColor = "";
  event.preventDefault();
});
