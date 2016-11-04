
<?php
// multiple recipients
$to  = 'Madhusudhana KN <madhusudhanakn@gmail.com>';

// subject
$subject = $_POST['subject'];

//Name
$name = $_POST['name'];

$email = $_POST['email'];

$from = $name . "<".$email.">";

$message = '
    <html>
    <head>
        <title>Mail from portfolio</title>
    </head>
    <body>
        <h1>Hi Madhusudhana, </h1>
        <table cellspacing="0" style="border: 1px solid #EEE; width: 500px;">
            <tr>
                <th>Name:</th><td>'.$name.'</td>
            </tr>
            <tr>
                <th>Email:</th><td>'.$email.'</td>
            </tr>
            <tr>
                <th>Message:</th><td>'.$_POST['message'].'</td>
            </tr>
        </table>
    </body>
    </html>';

// Set content-type header for sending HTML email
$headers = "MIME-Version: 1.0" . "\r\n";
$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// Additional headers
$headers .= 'From: '. $from . "\r\n";

// Mail it
mail($to, $subject, $message, $headers);
echo "success";
?>
