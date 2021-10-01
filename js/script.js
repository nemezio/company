$(document).ready(function(){
    //adicionar rolagem suave a todos links na barra de navegação + link de rodapé
    $(".navbar a, footer a[href='#myPage']").on('click', function(event){
    //Certifique-se de que this.hash tenha um valor antes de substituir o comportamento padrão
        if(this.hash !== ""){
            //impedir o comportamento padrão do clique da âncora
            event.preventDefault();

            //store hash
            var hash = this.hash;

            //usando o método animate() do query para adicionar rolagem de página suave
            //o número opcional(900) especifica o número de milissegundos que levar para rolar para a área especificada.
            $('hmlt, body').animate({scrollTop: $(hash).offset().top}, 900, function(){
                //adicionar hash(#) ao url quando terminar de rolar (comportamento de clique padrão)
                window.location.hash = hash;
            });
        }//fim do if
    });

    $(window).scroll(function(){
        $(".slideanim").each(function(){
            var pos = $(this).offset().top;
            var winTop = $(window).scrollTop();
            if(pos < winTop + 600){
                $(this).addClass("slide");
            }
        });
    });
})