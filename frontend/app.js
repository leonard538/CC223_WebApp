var fullImgBox = document.getElementById("fullimgbox");
var fullImg = document.getElementById("fullimg");

function openFullImg(image) {
    fullImgBox.style.display = "flex";
    fullImg.src = image;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}
  