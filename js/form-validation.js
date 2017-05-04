
$(document).ready(function() {
		// validate signup form on keyup and submit
	     $("form").validate({
          rules: {
            Gender:{ required:true },
            firstname: "required",
            lastname: "required",
            email: {
              required: true,
              email: true,
              // remote: "emails.action"
            },
            password: {
              required: true,
              minlength: 5
            },
            password_confirm: {
              required: true,
              minlength: 5,
              equalTo: "#password"
            },
            agree: "required"
          },
          messages: {
            Gender: {
              required:"Dies ist ein Pflichtfeld."
              },
            firstname: "Dies ist ein Pflichtfeld.",
            lastname: "Dies ist ein Pflichtfeld.",
            email: {
              required: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
              minlength: "Bitte geben Sie eine gültige E-Mail-Adresse ein.",
              // remote: jQuery.validator.format("{0} is already in use")
            },
            password: {
              required: "Dies ist ein Pflichtfeld.",
              minlength: jQuery.validator.format("Geben Sie bitte mindestens {0} Zeichen ein.")
            },
            password_confirm: {
              required: "Dies ist ein Pflichtfeld.",
              minlength: jQuery.validator.format("Geben Sie bitte mindestens {0} Zeichen ein."),
              equalTo: "Bitte denselben Wert wiederholen."
            },
            agree:"Dies ist ein Pflichtfeld."
          },
          errorPlacement: function(error, element) {
                if (element.is(":radio"))
              error.insertAfter( element.parents('#gender-radios-wrapper') );
            else if (element.is(":checkbox"))
              error.insertAfter(element.parent('#agree-checkbox-wrapper') );
            else
              error.appendTo( element.parent());
          },
          success: function(label) {
            label.text("Eingaben OK").addClass("success");
          }
		  });

});




/*		// propose username by combining first- and lastname
		$("#username").focus(function() {
			var firstname = $("#firstname").val();
			var lastname = $("#lastname").val();
			if (firstname && lastname && !this.value) {
				this.value = (firstname + "." + lastname).toLowerCase();
			}
		});*/


/*
			// the errorPlacement has to take the table layout into account
			errorPlacement: function(error, element) {
				if (element.is(":radio"))
					error.appendTo(element.parent().next().next());
				else if (element.is(":checkbox"))
					error.appendTo(element.next());
				else
					error.appendTo(element.parent().next());
			},
			// specifying a submitHandler prevents the default submit, good for the demo
			submitHandler: function() {
				alert("submitted!");
			},
			// set this class to error-labels to indicate valid fields
			success: function(label) {
				// set &nbsp; as text for IE
				label.html("&nbsp;").addClass("checked");
			},
			highlight: function(element, errorClass) {
				$(element).parent().next().find("." + errorClass).removeClass("checked");
			}
*/


// check email *rule* & *message*







