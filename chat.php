<?php 


	session_start();


	require_once('functions.php');

	if(!logged_in()){
		header('location: index.php');
	}


	if(isset($_POST['chatupdate'])){

		$email = $_SESSION['email'];

		$message = $_POST['message'];

		$insert = $connection->query("INSERT INTO conversation(email, message) VALUES('$email', '$message')");

		die();

	}


	if(isset($_POST['updatehobe'])){


				$messages = $connection->query("SELECT * FROM conversation");


				while($rows = mysqli_fetch_assoc($messages)){

					$em = $rows['email'];

					$query = mysqli_query($connection, "SELECT * FROM users WHERE email = '$em'");

					$queryvalue = mysqli_fetch_assoc($query);

					echo '<p><span class="fullname">'.$queryvalue['firstname'].' '.$queryvalue['lastname'].':</span> '.$rows['message'].'</p>';

				}

				die();
	}


?>

<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Chatroom</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	
	<div class="logout">
	    <a href="index.php">Logout</a>
	</div>

	<div class="chat box">
		<div class="squarebox">

          
				
			
		</div>
		<form action="" method="POST" class="sendmessage">
			<input placeholder="type something" class="amader-input message" type="text" name="message">
			<input type="submit" value="Send" name="send">
		</form>
	</div>

	<script src="js/jquery.js"></script>
	<script src="js/scripts.js"></script>


</body>
</html>