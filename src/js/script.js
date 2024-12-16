const hamburgerIcon = document.querySelector('.hamburger-icon')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')
const sidebar= document.querySelector('.sidebar')
const navLinks = sidebar.querySelectorAll('a')
const html = document.body
console.log(html);
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
    }, 500);


    
}
window.addEventListener('scroll',()=>{
    if(window.scrollY >=90){
        nav.classList.add('active2')
    }else{
        nav.classList.remove('active2')


    }
})
hamburgerIcon.addEventListener('click',showSidebar)
closeIcon.addEventListener('click',closeSidebar)
navLinks.forEach(link => {
    link.addEventListener('click',closeSidebar)
});