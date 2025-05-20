let sidebarItems = document.querySelectorAll('.sidebar .item');
let tableRows = document.querySelectorAll('.main-section table tbody tr');
let menuButton = document.querySelectorAll('.menu-btn');
let leftSection = document.querySelectorAll('.left-section');

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