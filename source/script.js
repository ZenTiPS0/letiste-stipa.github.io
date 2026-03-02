function hamburg(){
    document.querySelector(".dropdown").classList.add("open");
}

function cancel(){
    document.querySelector(".dropdown").classList.remove("open");
}

// zavření po kliknutí na odkaz
document.querySelectorAll('.dropdown .links a').forEach(a => {
    a.addEventListener('click', cancel);
});

// zavření kliknutím mimo menu
document.addEventListener('click', function(e) {
    const menu = document.querySelector('.dropdown');
    const hamburg = document.querySelector('.hamburg');

    if(menu && menu.classList.contains('open')) {
        if(!menu.contains(e.target) && !hamburg.contains(e.target)) {
            cancel();
        }
    }
});

// galerie funkce
function showGallery(category) {
    document.querySelectorAll(".gallery-section").forEach(section => {
        section.classList.remove("active");
    });
    document.getElementById(category).classList.add("active");
}

// zoom funkce
function openZoom(element) {
    document.getElementById("zoomOverlay").style.display = "flex";
    document.getElementById("zoomImg").src = element.src;
}

function closeZoom() {
    document.getElementById("zoomOverlay").style.display = "none";
}