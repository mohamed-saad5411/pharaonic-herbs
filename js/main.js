let gallery =Array.from( document.querySelectorAll('#gallery .col-md-3 img'))
let sliderLayer = document.getElementById('sliderLayer')
let currentImg = document.getElementById('currentImg')
let close = document.getElementById('close')
let left = document.getElementById('left')
let right = document.getElementById('right')
let nextBtn = document.querySelector('#nextBtn')
let fristPage = document.querySelector('#fristPage')
let secondPage = document.querySelector('#secondPage')
let prevBtn = document.querySelector('#prevBtn')
let prevPageText = document.querySelector('#prevPageText')
let nextPageText = document.querySelector('#nextPageText')

// let windowScroll = $(window).scrollTop();
// let sectionOffset = $('#quality').offset().top;

// if (windowScroll > sectionOffset -50) {
//     document.getElementsByClassName('quality-content').classList.add('wow' , 'bounceInLeft')
// }
// console.log(sectionOffset);

for (let i = 0; i < gallery.length; i++) {

    gallery[i].addEventListener('click', function (info) {
        sliderLayer.classList.remove('d-none')
        currentImgSrc = info.target.getAttribute('src')
        currentImg.setAttribute('src', currentImgSrc)
        currentIndex = gallery.indexOf(info.target)
    })

}

function nextImg() {
    currentIndex++
    if (currentIndex == gallery.length) {
        currentIndex = 0 
    }
    let nextImgSrc = gallery[currentIndex].getAttribute('src')
    currentImg.setAttribute('src' , nextImgSrc)

}

function pervImg() {
    currentIndex--
    if (currentIndex == 0) {
        currentIndex = gallery.length 
    }
    let nextImgSrc = gallery[currentIndex].getAttribute('src')
    currentImg.setAttribute('src' , nextImgSrc)

}

function nextPage() {
    fristPage.classList.add('d-none')
    nextPageText.classList.add('d-none')
    prevPageText.classList.remove('d-none')
    nextBtn.classList.replace('btn-outline-success','btn-success')
    prevBtn.classList.replace('btn-success','btn-outline-success')
    secondPage.classList.remove('d-none')
    
}

function prevPage() {
    secondPage.classList.add('d-none')
    prevPageText.classList.add('d-none')
    nextPageText.classList.remove('d-none')
    prevBtn.classList.replace('btn-outline-success','btn-success')
    nextBtn.classList.replace('btn-success','btn-outline-success')
    fristPage.classList.remove('d-none')
}


nextBtn.addEventListener('click',nextPage)
nextPageText.addEventListener('click',nextPage)
prevPageText.addEventListener('click',prevPage)
prevBtn.addEventListener('click',prevPage)


right.addEventListener('click', nextImg)
left.addEventListener('click', pervImg)
close.addEventListener('click', function () {
    sliderLayer.classList.add('d-none')
})
