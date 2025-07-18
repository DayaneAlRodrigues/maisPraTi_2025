const menuHamburguer = document.getElementById('menu_hamburguer');
const navMenu = document.getElementById('navMenu');

const arrow = document.getElementById('arrow_up');

//code para validar form

const form = document.getElementById('form');
const inputs = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span');
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const telefoneRegex = /^\(?\d{2}\)?[\s-]?\d{4,5}-?\d{4}$/;
const submit = document.getElementById('submit');

function throwError(index){
    inputs[index].style.border = '2px solid #a38ebe';
    spans[index].style.display = 'block';
}

function resolveError (index){
    inputs[index].style.border = '';
    spans[index].style.display = 'none';
}

function nameValidate (){
    if(inputs[0].value.length < 3){
        throwError(0);
    }else {
        resolveError(0);
    }
}

function emailValidate(){
    if(emailRegex.test(inputs[1].value)){
        resolveError(1);
    } else {
        throwError(1);
    }
}

function foneValidate(){
    if(telefoneRegex.test(inputs[2].value)){
        resolveError(2);
    } else {
        throwError(2);
    }
}

// code para toggle do menu 

menuHamburguer.addEventListener('click', () =>
    navMenu.classList.toggle('open')
);

//code para seta subir ao topo da pag

arrow.addEventListener('click', () => {
    window.scrollTo({
        top:0,
        behavior:'smooth'
    })
});

submit.addEventListener('click', ()=> {
    inputs.forEach( input => {
        input.value = '';
    })
})

//code para o carousel

    const carouselSlide = document.querySelector('.carousel_slide');
    const images = document.querySelectorAll('.carousel_slide img');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0; 
    const imageWidth = images[0].clientWidth; // pega a largura exata em pixels para usar o efeito de slide com o transform

    function updateSlidePosition() {
        carouselSlide.style.transform = `translateX(${-currentIndex * imageWidth}px)`;
        updateDots();
    }

    function updateDots() {
        document.querySelectorAll('.dot').forEach((dot, index) => {
            dot.classList.remove('active');
        });
        document.querySelectorAll('.dot')[currentIndex].classList.add('active');
    }

    images.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        dot.dataset.index = index; 
        dot.addEventListener('click', () => {
            currentIndex = index;
            updateSlidePosition();
        });
        dotsContainer.appendChild(dot);
    });
    updateDots();

    nextBtn.addEventListener('click', () => {
        currentIndex++;
        if (currentIndex > images.length - 1) {
            currentIndex = 0;
        }
        updateSlidePosition();
    });

    prevBtn.addEventListener('click', () => {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = images.length - 1; 
        }
        updateSlidePosition();
    });

    let autoSlideInterval;

    function startAutoSlide() {
        autoSlideInterval = setInterval(() => {
            nextBtn.click(); 
        }, 3000); 
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    startAutoSlide();

    carouselSlide.parentNode.addEventListener('mouseenter', stopAutoSlide);
    carouselSlide.parentNode.addEventListener('mouseleave', startAutoSlide);

    window.addEventListener('resize', () => {
        imageWidth = images[0].clientWidth;
        updateSlidePosition(); 
    });
