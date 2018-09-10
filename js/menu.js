
    $('#fullpage').fullpage({
        anchors: ['1rdPage', '2rdPage', '3rdPage','4rdPage','5rdPage','6rdPage','7rdPage'],
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
                $("#menu").removeClass("none");
                $("#fp-nav").removeClass("none"); 
                $("#contacto").removeClass("none");                  
            } 
            else if(index == 2 && direction =='up'){
                $("#menu").addClass("none");
                $("#fp-nav").addClass("none"); 
                $("#contacto").addClass("none");                                 
            }

            if(index == 6 && direction =='down'){
                $("#icon-mail").attr('src','img/icon-mail-hover.svg');
                console.log("asd");
            }
            else if(index == 7 && direction =='up'){
                $("#icon-mail").attr('src','img/icon-mail.svg');
                console.log("asd");
            }            
        },
        afterLoad: function(anchorLink, index){
            if(index == 7){
                $("#icon-mail").attr('src','img/icon-mail-hover.svg'); 
            }

            if(index == 1){
                $("#menu").addClass("none");
                $("#fp-nav").addClass("none"); 
                $("#contacto").addClass("none");   
            }
        },                                  
        responsiveWidth: 900,
        afterResponsive: function(isResponsive){

        }


    });
$(document).ready(function(){
    $("#boton-1").click(function(){
            $("#menu").addClass("none");
             $("#fp-nav").addClass("none"); 
                $("#contacto").addClass("none");              
    });
 $("#icon-mail").hover(function(){
        var hovericon = 1;

        if(hovericon = 1){
            $("#icon-mail").attr('src','img/icon-mail-hover.svg');
        }

    });  


 /*
    $("#icon-mail").hover(function(){
         var src = ($(this).attr('src') === 'img/icon-mail.svg')
            ? 'img/icon-mail-hover.svg'
            : 'img/icon-mail.svg';
         $(this).attr('src', src);
    });

   

    $("#icon-mail").click(function(){
        $("#icon-mail").attr('src','img/icon-mail-hover.svg');
    });
*/
});    