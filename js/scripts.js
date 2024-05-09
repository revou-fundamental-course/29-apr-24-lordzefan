

let indexSlide = 0; // Atur indeks awal menjadi 0

showSlide(indexSlide);

function nextSlide(n){
    console.log('nextSlide: ' + n);
    showSlide(indexSlide += n);
}

function showSlide(index){
    console.log('showSlide: ' + index);
    let ListImage = document.getElementsByClassName('list-image');
    console.log("banyaknya image" +ListImage.length);
    let i = 0;
    if (index > ListImage.length - 1) indexSlide = 0; // Perbaiki pengecekan indeks
    if (index < 0) indexSlide = ListImage.length - 1; // Perbaiki pengecekan indeks
    while (i < ListImage.length){
        ListImage[i].style.display = "none";
        i++;
    }
    ListImage[indexSlide].style.display ="block";
}

// Panggil setInterval di luar fungsi showSlide
setInterval(() => nextSlide(1), 2000);

document.addEventListener("DOMContentLoaded", function() {
    // Mendapatkan tombol-tombol navigasi
    var btnHome = document.getElementById("btnHome");
    var btnGallery = document.getElementById("btnService");
    var btnContact = document.getElementById("btnContact");

    // Menangani peristiwa klik pada tombol-tombol navigasi
    btnHome.addEventListener("click", function() {
        // Navigasikan pengguna ke bagian Home
        var homeSection = document.getElementById("home");
        homeSection.scrollIntoView({ behavior: 'smooth' });
    });

    btnService.addEventListener("click", function() {
        // Navigasikan pengguna ke bagian Gallery
        var gallerySection = document.getElementById("service");
        gallerySection.scrollIntoView({ behavior: 'smooth' });
    });

    btnContact.addEventListener("click", function() {
        // Navigasikan pengguna ke bagian Contact
        var contactSection = document.getElementById("contact");
        contactSection.scrollIntoView({ behavior: 'smooth' });
    });
});
