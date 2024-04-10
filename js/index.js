/* AOS Animate */
  AOS.init();

/* Página Home */
document.addEventListener("DOMContentLoaded", function() {
                            
    setTimeout(mostraNome, 300);
    setInterval(pulsaScroll, 7000);
    reproduzirVideo();

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

        strings: ['Olá, me chamo Erick Mota, tenho 27 anos e sou formado em<br>análise e desenvolvimento de sistemas.<br><br>Eu posso fazer:'],
        typeSpeed: 30,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(mostraAtribrutos, 1000);

        },

    });

}

function mostraAtribrutos(){

    var typed = new Typed('.atributos', {

        strings: ['Desenvolvimento de sites institucionais', 'Desenvolvimento de sistemas web', 'Desenvolvimento de aplicativos móveis Android e IOS', 'Criação de sites responsivos', 'Programação orientada a objetos', 'Programação em PHP', 'Programação em JavaScript', 'Uso de linguagens de marcação, como HTML e CSS', 'Uso de bibliotecas front-end, como Bootstrap e Jquery', 'Modelagem de banco de dados relacional'],
        typeSpeed: 50,
        backSpeed: 10,
        cursorChar: '|',
        loop: true,

    });

}

function pulsaScroll(){

    var elemento = document.getElementById("imgScroll");

    elemento.classList.add("animate__bounce");

    setTimeout(()=>{

        elemento.classList.remove("animate__bounce");

    }, 4000)

}