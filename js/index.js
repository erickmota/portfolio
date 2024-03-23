/* AOS Animate */
  AOS.init();

/* Página Home */
document.addEventListener("DOMContentLoaded", function() {
                            
    setTimeout(mostraNome, 300);
    setTimeout(mostraScroll, 10000);
    setInterval(pulsaScroll, 11000);

});

function mostraNome(){

    var typed = new Typed('.nomePrincipal', {

        strings: ['BEM-VINDO AO MEU PORTFÓLIO'],
        typeSpeed: 30,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(mostraSlogan, 500);

        },

    });

}

function mostraSlogan(){

    var typed = new Typed('.slogan', {

        strings: ['Olá, me chamo Erick Mota, tenho 27 anos e sou formado em<br>análise e desenvolvimento de sistemas.<br><br>Tenho conhecimento em:'],
        typeSpeed: 30,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(mostraAtribrutos, 1000);

        },

    });

}

function mostraAtribrutos(){

    var typed = new Typed('.atributos', {

        strings: ['Desenvolvimento de sites institucionais', 'Desenvolvimento de sistemas web', 'Desenvolvimento de aplicativos móveis', 'Sistemas responsivos', 'Programação orientada a objetos', 'Programação em PHP', 'Programação em JavaScript', 'Linguagens de marcação, como HTML e CSS', 'Bibliotecas front-end, como Bootstrap', 'Banco de dados relacional'],
        typeSpeed: 50,
        backSpeed: 10,
        cursorChar: '|',
        loop: true,

    });

}

function mostraScroll(){

    var elemento = document.getElementById("imgScroll");

    elemento.classList.remove("d-none");

}

function pulsaScroll(){

    var elemento = document.getElementById("imgScroll");

    elemento.classList.add("animate__bounce");

    setTimeout(()=>{

        elemento.classList.remove("animate__bounce");

    }, 4000)

}