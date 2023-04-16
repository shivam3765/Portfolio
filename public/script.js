const _name    = document.querySelector('.name');
const logo     = document.querySelector('.logo');
const logoSpan = document.querySelector('.logo span');
const navItem = document.querySelectorAll('.nav_item');

_name.addEventListener('mouseover', function () {
    let a = "/"
    _name.innerHTML = `<span class="slash">< ${a}</span> Full Stack Developer <span class="slash">></span>`
    _name.style.transition = 'all 2s ease-in-out';
})
_name.addEventListener('mouseout', function () {
    _name.style.transition= '1s ease-in-out';
    _name.textContent = 'Shivam Chaudhary'
})


logo.addEventListener('mouseover', function () {
    logoSpan.style.transition = ".4s ease-in-out";
    logoSpan.style.color = '#fcd0a1';
})
logo.addEventListener('mouseout', function () {
    logoSpan.style.color = '#9B0041';
})



const menuBtn = document.querySelector('.menu_svg')
const menuCloseBtn = document.querySelector('.mobile_menu_icon')
const moileNav = document.querySelector('.mobile_menu')

menuBtn.addEventListener('click', function () {
    moileNav.style.display = 'flex';
    if (moileNav.style.display = 'flex') {
        document.body.style.overflowY = 'hidden'
    } 
    })
    
    menuCloseBtn.addEventListener('click', function () {
        moileNav.style.display = 'none';
        document.body.style.overflowY = 'scroll'
})



// -------  Scrolling feature  ------

const scrolling = document.querySelectorAll('.scrolling')

const sectionFun = function (entries) {
    let [entry] = entries;

    if (!entry.isIntersecting) return;
    entry.target.style.transition = 'all .5s'
    entry.target.classList.remove('none')

}
const sectionRevel = new IntersectionObserver(sectionFun, {
    root: null, threshold: .2
})

scrolling.forEach(item => {
    sectionRevel.observe(item)
    item.classList.add('none')
})


// ---------  errow feature  ------------

const arrow = document.querySelector('.arrow')

const section = function (en) {
    let [e] = en
    if (e.isIntersecting) {
        arrow.style.transition = 'all .5s'
        arrow.classList.add('none')
    } else {
        arrow.style.transition = 'all .5s'
        arrow.classList.remove('none')
        
    }
}

const arrowRevel = new IntersectionObserver(section, {
    root: null, threshold: .9
})

arrowRevel.observe(document.querySelector('.main'))
arrow.classList.add('none')
