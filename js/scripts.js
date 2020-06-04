(function($){



	jQuery('.sendmessage').submit(function(){

		var message = jQuery(".message").val();

		$.ajax({
			'url' : 'chat.php',
			'type' : 'POST',
			'data' : {
				'chatupdate' : '',
				'message' : message
			},
			'success' : function(){

				jQuery('.message').val('');
			}
		});

		return false;

	});


	jQuery(document).ready(function(){



		
		jQuery(".userlogin").submit(function(){


			var email = jQuery('input[name="email"]').val();
			var password = jQuery('input[name="password"]').val();

			$.ajax({
				'url' : 'login.php',
				'type' : 'POST',
				'data' : {
					'login' : '',
					'email' : email,
					'password' : password
				},
				'success' : function(output){



					jQuery(".amader-input").val('');
				}
			});


		});





		jQuery(".userregistration").submit(function(){


			var firstname = jQuery("input[name='first_name']").val();
			var lastname = jQuery("input[name='last_name']").val();
			var email = jQuery("input[name='email']").val();
			var password = jQuery("input[name='password']").val();

			$.ajax({
				'url' : 'register.php',
				'type' : 'POST',
				'data' : {
					'register' : 'ase',
					'firstname' : firstname,
					'lastname' : lastname,
					'email' : email,
					'password' : password
				},
				'success' : function(output){
					jQuery(".success").html(output);

					jQuery('.amader-input').val('');
				}
			});


			return false;


		});


	});





	setInterval(function(){
		

		$.ajax({
			'url' : 'chat.php',
			'type' : 'POST',
			'data' : {
				'updatehobe' : ''
			},
			'success' : function(output){
				jQuery('.squarebox').html(output);
			}
		});


	}, 300);



}(jQuery))

