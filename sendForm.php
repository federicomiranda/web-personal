<?php
header("Access-Control-Allow-Origin: *");

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

if(isset($_POST['nombre']) && $_POST['nombre'] != '' && isset($_POST['apellido']) && $_POST['apellido'] != '' && isset($_POST['email']) && $_POST['email'] != '' && isset($_POST['asunto']) && $_POST['asunto'] != '' && isset($_POST['mensaje']) && $_POST['mensaje'] != '') {
	$nombre = $_POST['nombre'];
	$apellido = $_POST['apellido'];
	$email = $_POST['email'];
	$asunto = $_POST['asunto'];
	$mensaje = $_POST['mensaje'];
} else {
    echo json_encode('error_campos');
	die();
}

try {
    //Server settings
    $mail->SMTPDebug = 0;
    $mail->isSMTP();
    $mail->Host = 'c1411271.ferozo.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'hola@federicomiranda.com.ar';
    $mail->Password = 'Peposa2019';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    //Recipients
    $mail->setFrom('hola@federicomiranda.com.ar', 'Federico Miranda');
	$mail->addAddress('hola@federicomiranda.com.ar');

    // Content
    $mail->isHTML(true);
    $mail->Subject = $asunto;
	$mail->Body = "
		<p><strong>Nombre: </strong> $nombre</p>
		<p><strong>Apellido: </strong> $apellido</p>
		<p><strong>E-mail: </strong> $email</p>
		<p><strong>Mensaje: </strong> $mensaje</p>
	";

    $mail->send();
    echo json_encode('ok');
} catch (Exception $e) {
    echo json_encode('error');
    die();
}