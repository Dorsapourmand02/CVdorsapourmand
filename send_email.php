<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['description'];

    $to = "d.pourmand2002@gmail.com";
    $subject = "You have new message from your website";
    $body = "Name: $name\n".
            "Email: $email\n".
            "Message:\n$message";
    $header = "From: $email";

    if(mail($to, $subject, $body, $header)) {
        echo "Email sent successfully.";
    } else {
        echo "Failed to send email.";
    };

echo "<pre>";
print_r($_POST);
echo "</pre>";


?>