const imagePreview = document.getElementById("imagePreview");
const dragLabel = document.getElementById("dragLabel");
const avatarInput = document.getElementById("avatar");
const activeBtns = document.querySelector(".active--image--btns");
const imageDrop = document.getElementById("image-drop");
const form = document.querySelector("form");
const events = ["dragenter", "dragover", "dragleave", "drop"];
let btnChange, btnRemove;

events.forEach((eventName) => {
  imageDrop.addEventListener(eventName, preventDefaults, false);
  document.body.addEventListener(eventName, preventDefaults, false);
});

function preventDefaults(e) {
  e.preventDefault();
  e.stopPropagation();
}

imageDrop.addEventListener("drop", handleDrop, false);

function handleDrop(e) {
  const dt = e.dataTransfer;
  const files = dt.files;
  console.log(files);
  handleFiles(files);
}

function handleFiles(files) {
  let file = files[0];
  createPreview(file);
}

function createPreview(file) {
  let objectURL = URL.createObjectURL(file);
  imagePreview.src = objectURL;
  dragLabel.style.display = "none";
  activeBtns.style.display = "flex";

  if (!btnChange || !btnRemove) {
    btnChange = document.getElementById("btnChange");
    btnRemove = document.getElementById("btnRemove");

    btnChange.addEventListener("click", changeImage);
    btnRemove.addEventListener("click", removeImage);
  }
}

form.addEventListener("submit", (e) => {
  // e.preventDefault();
});

avatarInput.addEventListener("change", (e) => {
  let file = avatarInput.files[0];
  createPreview(file);
});

function changeImage() {
  avatarInput.click();
}

function removeImage() {
  avatarInput.value = "";
  imagePreview.src = "./assets/images/icon-upload.svg";
  btnRemove.removeEventListener("click", removeImage);
  btnChange.removeEventListener("click", changeImage);
  activeBtns.style.display = "none";
  dragLabel.style.display = "block";
  btnChange = undefined;
  btnRemove = undefined;
}
