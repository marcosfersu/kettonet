
    $('#fullpage').fullpage({
        lockAnchors: false,
        anchors: ['inicio', 'desarrollos', 'calidad','equipo','experiencia','producto','contacto'],
        sectionsColor: ['#ffffff'],
        navigation: true,
        navigationPosition: 'right',
        menu: '#menu',           
       afterRender: function(){
            $("#menu").addClass("none");
            $("#fp-nav").addClass("none"); 
            $("#contacto").addClass("none");             
        },
 /*       afterLoad: function(anchor, index){
          if(index == 2){
            $("#menu").removeClass("none");
          }

          if(index == 1){
            $("#menu").addClass("none");
          }
      },  */
        onLeave: function(index, nextIndex, direction){
            if(index == 1 && direction =='down'){
                $(".menu").removeClass("none");
                $("#fp-nav").removeClass("none"); 
                $("#contacto").removeClass("none");   
            } 
            else if(index == 2 && direction =='up'){
                $(".menu").addClass("none");
                $("#fp-nav").addClass("none"); 
                $("#contacto").addClass("none");                                 
                $(".menu").addClass("left");                                 
            }

            if(index == 6 && direction =='down'){
                $(".icon-mail img").addClass("hover-icon7");
            }
            else if(index == 7 && direction =='up'){
                $(".icon-mail img").removeClass("hover-icon7");
                $(".icon-mail img").removeClass("hover-icon");                
            }            
        },
        afterLoad: function(anchorLink, index){
            if(index == 7){
                $(".icon-mail img").addClass("hover-icon7");
            }

            if(index == 1){
                $(".menu").addClass("none");
                $("#fp-nav").addClass("none"); 
                $("#contacto").addClass("none");   
            }
        },                                  
        responsiveWidth: 900,
        afterResponsive: function(isResponsive){

        },
        responsiveHeight: 600,
        afterResponsive: function(isResponsive){
        }
    });
$(document).ready(function(){
    $("#boton-1").click(function(){
            $(".menu").addClass("none");
             $("#fp-nav").addClass("none"); 
                $("#contacto").addClass("none");              
    });

/*    $("#icon-mail").hover(function(){
         var src = ($(this).attr('src') === 'img/icon-mail.svg')
            ? 'img/icon-mail-hover.svg'
            : 'img/icon-mail.svg';
         $(this).attr('src', src);
    });

    $("#icon-mail").hover(function(){
        $("#icon-mail").attr('src','img/icon-mail-hover.svg');
    });    

    $("#icon-mail").click(function(){
        $("#icon-mail").attr('src','img/icon-mail-hover.svg');
    });*/

    $(".axe").click(function(){
        $(".menu").toggleClass("left");
    });


    $(".menu-ul > li").click(function(){
        $(".menu").addClass("left");
    });  

    $(".icon-mail").hover(function(){
        $(".icon-mail img").toggleClass("hover-icon");     
        console.log(2);        
    });

    $(".icon-mail").click(function(){
        $(".icon-mail img").addClass("hover-icon7");     
        console.log(1);
    });    
       
    // document.getElementById("img-gif").controls = false;


});    

