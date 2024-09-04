// Función para abrir la pestaña de los no Responsive
document.getElementById("abrirPagina1").addEventListener("click", function () {
    window.open("./things.html", "_blank");
});


// Función para abrir la pestaña de las flores
document.getElementById("abrirPagina2").addEventListener("click", function () {
    window.open("./gift.html", "_blank");
});

// Función para abrir la pestaña de los videos
document.getElementById("abrirPagina3").addEventListener("click", function () {
    window.open("./videos.html", "_blank");
});

// Carrusel 2 (myartist)
const fulImgBox2 = document.getElementById("fulImgBox2"),
fulImg2 = document.getElementById("fulImg2");

function openFulImg2(reference){
    fulImgBox2.style.display = "flex";
    fulImg2.src = reference
}
function closeImg2(){
    fulImgBox2.style.display = "none";
}


// Carrusel 4 (sky)
const fulImgBox = document.getElementById("fulImgBox"),
fulImg = document.getElementById("fulImg");

function openFulImg(reference){
    fulImgBox.style.display = "flex";
    fulImg.src = reference
}
function closeImg(){
    fulImgBox.style.display = "none";
}


// Carrusel 7 (herboyfriend)
const fulImgBox3 = document.getElementById("fulImgBox3"),
fulImg3 = document.getElementById("fulImg3");

function openFulImg3(reference){
    fulImgBox3.style.display = "flex";
    fulImg3.src = reference
}
function closeImg3(){
    fulImgBox3.style.display = "none";
}