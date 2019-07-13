<?php
	// Esto se ejecuta SÓLO si viene del posteo del formulario
	if($_POST){

		$cuerpo = "";
		// Por cada elemento del formulario, ejecuto:
		foreach($_POST as $campo=>$valor){
			$cuerpo.= "$campo: $valor <br>";
		}

		// Seteo datos del correo
		$para = "Ventas@kettonet.com.ar";
		$asunto = "Nueva consulta desde la Web";
		$cuerpo = "Se ha recibido el siguiente formulario: " . $cuerpo;

		// Dejo esto por default
		$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
		$cabeceras .= 'Content-type: text/html; charset=iso-UTF-8' . "\r\n";
		$cabeceras .= 'Reply-to: $email' . "\r\n";

		// Envio el correo
		/*if(mail($para, $asunto, $cuerpo, $cabeceras))
			echo '<script language="javascript">
			alert("Su mensaje se envio exitosamente");
			window.location.href="index.html#contacto";
			</script>';
		else{
			echo "Error interno:" . error_get_last()['message'];
		}*/

		if(mail($para, $asunto, $cuerpo, $cabeceras)){
			echo "Su mensaje se envio exitosamente";

		}else{
			echo "Error interno:" . error_get_last()['message'];
		}


	}
?>
