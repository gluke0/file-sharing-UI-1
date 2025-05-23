let sidebarItems = document.querySelectorAll('.sidebar .item');
let tableRows = document.querySelectorAll('.main-section table tbody tr');
let menuButton = document.getElementById('menu-btn');
let leftSection = document.querySelector('.left-section');
let playButton = document.querySelector('.ri-play-large-line');
let volumeButton = document.querySelector('.ri-volume-mute-line');
let openMenu = false;

sidebarItems.forEach(sideItem =>{
    sideItem.addEventListener('click', () =>{
        sidebarItems.forEach(item =>{
            item.classList.remove('active');
        });
        sideItem.classList.add('active');
    });
});

tableRows.forEach(tableTr =>{
    tableTr.addEventListener('click', () =>{
        tableRows.forEach(item =>{
            item.classList.remove('selected');
        });
        tableTr.classList.add('selected');
    });
});

menuButton.addEventListener('click', () =>{
    if (!openMenu){
        leftSection.style.left = '0';
    }else{
        leftSection.style.left = '-160px';
    }
    openMenu = !openMenu;
});

playButton.addEventListener('click', function(){
    if(playButton.className === ("ri-play-large-line")){
        playButton.classList.remove("ri-play-large-line");
        playButton.classList.add("ri-pause-large-line");
    }else{
        playButton.classList.remove("ri-pause-large-line");
        playButton.classList.add("ri-play-large-line");
    }  
});

