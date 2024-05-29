function openNav(){
    document.getElementById('mobile-menu').style.width = "100%"
}

function closeNav(){
    document.getElementById('mobile-menu').style.width = "0%"
}

// cortina

document.addEventListener('DOMContentLoaded', (event) => {
    setTimeout(() => {
        document.querySelector('.cortina').style.opacity = '0';
    }, 2000);

    setTimeout(() => {
        document.querySelector('.cortina').style.display = 'none';
    }, 4000);
});
