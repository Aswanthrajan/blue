function togglemenu(){
    const menu=document.querySelector(".menu-links");
    const icon=document.querySelector(".hamburger-icon");
    document.querySelector(".menu-links-wrapper").classList.toggle("active"); 
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}