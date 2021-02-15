let header = document.querySelector('.header');

window.addEventListener('scroll', ()=> {
    header.classList.toggle('header-sticky', window.scrollY > 0);
})

let links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', function() {
        links.forEach(e => e.classList.remove('active'));
        this.classList.add('active');
    })
})

console.log(links);