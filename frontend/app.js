var fullImgBox = document.getElementById("fullimgbox");
var fullImg = document.getElementById("fullimg");

function openFullImg(image) {
    fullImgBox.style.display = "flex";
    fullImg.src = image;
}

function closeFullImg() {
    fullImgBox.style.display = "none";
}

function fetchData() {
    fetch('http://localhost:3000/api/data')
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error('Error fetching data:', error));
}

fetchData();