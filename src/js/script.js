const hamburgerIcon = document.querySelector('.hamburger-icon')
const closeIcon = document.querySelector('.close-icon')
const sidebar= document.querySelector('.sidebar')

const showSidebar = () => {

    sidebar.style.display='flex'
    sidebar.classList.add('animation')
    sidebar.classList.remove('animation0')
}
const closeSidebar = () => {
    sidebar.classList.remove('animation')
    sidebar.classList.add('animation0')
    setTimeout(() => {
        
        sidebar.style.display='none'
    }, 1000);


    
}
hamburgerIcon.addEventListener('click',showSidebar)
closeIcon.addEventListener('click',closeSidebar)