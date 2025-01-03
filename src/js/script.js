const hamburgerIcon = document.querySelector('.hamburger-icon')
const closeIcon = document.querySelector('.close-icon')
const nav = document.querySelector('nav')
const sidebar= document.querySelector('.sidebar')
const navLinks = sidebar.querySelectorAll('a')
const html = document.body
const currentYear=document.querySelector('.year')

const nameInputs = document.querySelectorAll('.inputs')


nameInputs.forEach(input =>{
    input.addEventListener('keyup',()=>{
        if(input.value!=''){
            input.nextElementSibling.classList.add('input-transform')
        }else{
            input.nextElementSibling.classList.remove('input-transform')

        }
        console.log(input.nextElementSibling);
    })
})

const handleCurrentYear = () => {
	const year = new Date().getFullYear()
	currentYear.innerText = year
}
handleCurrentYear()
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