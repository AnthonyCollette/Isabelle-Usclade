<?php 
if(isset($_POST['submit'])){
    $to = "100pour100inde@gmail.com"; // this is your Email address
    $from = $_POST['email']; // this is the sender's Email address
    $first_name = $_POST['firstname'];
    $last_name = $_POST['name'];
    $phone = $_POST['phone'];
    $subject = $_POST['object'];
    $message = "Expéditeur :" . "\n" . "Prénom : " . $first_name . "\n" . "Nom : " . $last_name . "\n" . "Tel : " . $phone  . "\n\n" . "Message :" . "\n" . $_POST['message'];

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;
    mail($to,$subject,$message,$headers);
    // echo "Votre mail a bien été envoyé " . $first_name . ", je vous recontacterai sous peu.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.
    // You cannot use header and echo together. It's one or the other.
    }
?>