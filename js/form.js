	function sendContacto(){
		if(!$("#frmContacto").hasClass('enviando')){
			$("#frmContacto").addClass('enviando');
			$.post("form.php",{ nombre: $('#nombre').val(), 
								email: $('#email').val(),
								comentarios: $('#comentarios').val(),
								rand:Math.random() } ,function(data){
			
				alert(data);
				
				$("#frmContacto").removeClass('enviando');
				$('#frmContacto')[0].reset();  
				console.log(data);

			});	
		}else{
			console.log('form enviando...');
		}
	}