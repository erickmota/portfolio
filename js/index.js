/* AOS Animate */
  AOS.init();

/* Página Home */
document.addEventListener("DOMContentLoaded", function() {
                            
    setTimeout(menor, 300);
    setInterval(pulsaScroll, 7000);
    reproduzirVideo();

});

const time_escrita = 30;
const time_escrita_lenta = 50;

function menor(){

    var typed = new Typed('.menor', {

        strings: ['&lt;'],
        typeSpeed: time_escrita_lenta,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(mostraNome, 50);

        },

    });

}

function mostraNome(){

    var typed = new Typed('.nomePrincipal', {

        strings: ['BEM-VINDO AO MEU PORTFÓLIO'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(maior, 50);

        },

    });

}

function maior(){

    var typed = new Typed('.maior', {

        strings: ['/&gt;'],
        typeSpeed: time_escrita_lenta,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(mostrarVariavel, 500);

        },

    });

}

function mostrarVariavel(){

    var typed = new Typed('.variavel', {

        strings: ['<br>$hello_world'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(igual, 100);

        },

    });

}

function igual(){

    var typed = new Typed('.igual', {

        strings: [' = '],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(mostraSlogan, 100);

        },

    });

}

function mostraSlogan(){

    var typed = new Typed('.slogan', {

        strings: ['&quot;Olá, me chamo Erick Mota, tenho 28 anos e sou formado em<br>análise e desenvolvimento de sistemas.&quot;'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(ponto_virgula, 100);

        },

    });

}

function ponto_virgula(){

    var typed = new Typed('.ponto_virgula', {

        strings: [';<br><br>'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(constt, 500);

        },

    });

}

function constt(){

    var typed = new Typed('.const', {

        strings: ['const'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(oqueFazer, 100);

        },

    });

}

function oqueFazer(){

    var typed = new Typed('.fazer', {

        strings: ['eu_posso_fazer'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(igual2, 100);

        },

    });

}

function igual2(){

    var typed = new Typed('.igual2', {

        strings: ['='],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(parenteses, 100);

        },

    });

}

function parenteses(){

    var typed = new Typed('.parenteses', {

        strings: ['( )'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(seta, 100);

        },

    });

}

function seta(){

    var typed = new Typed('.seta', {

        strings: ['=>'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(conchete, 100);

        },

    });

}

function conchete(){

    var typed = new Typed('.conchete', {

        strings: ['{<br>'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(consoles, 100);

        },

    });

}

function consoles(){

    var typed = new Typed('.console', {

        strings: ['document'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(ponto, 100);

        },

    });

}

function ponto(){

    var typed = new Typed('.ponto', {

        strings: ['.'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(log, 100);

        },

    });

}

function log(){

    var typed = new Typed('.log', {

        strings: ['write'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(parenteses2, 100);

        },

    });

}

function parenteses2(){

    var typed = new Typed('.parenteses2', {

        strings: ['('],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(mostraAtribrutos, 100);

        },

    });

}

function mostraAtribrutos(){

    var typed = new Typed('.atributos', {

        strings: ['&quot;Desenvolvimento de sites institucionais&quot;', '&quot;Desenvolvimento de sistemas web&quot;', '&quot;Desenvolvimento de aplicativos móveis Android e IOS&quot;', '&quot;Criação de sites responsivos&quot;', '&quot;Programação orientada a objetos&quot;', '&quot;Programação orientada a componentes&quot;', '&quot;Programação em PHP&quot;', '&quot;Programação em JavaScript&quot;', '&quot;Uso de linguagens de marcação, como HTML e CSS&quot;', '&quot;Uso de bibliotecas front-end, como Bootstrap e Jquery&quot;', '&quot;Modelagem de banco de dados&quot;'],
        typeSpeed: time_escrita_lenta,
        backSpeed: 10,
        cursorChar: '|',
        loop: true,
        onStringTyped: (array, self) => {

            if(array === 0){

                setTimeout(parenteses3, 100);

            }

        },

    });

}

function parenteses3(){

    var typed = new Typed('.parenteses3', {

        strings: [')'],
        typeSpeed: time_escrita,
        cursorChar: '',
        onComplete: (self) => {

            setTimeout(conchete2, 100);

        },

    });

}

function conchete2(){

    var typed = new Typed('.conchete2', {

        strings: ['<br>}'],
        typeSpeed: time_escrita,
        cursorChar: '',

    });

}

function pulsaScroll(){

    var elemento = document.getElementById("imgScroll");

    elemento.classList.add("animate__bounce");

    setTimeout(()=>{

        elemento.classList.remove("animate__bounce");

    }, 4000)

}