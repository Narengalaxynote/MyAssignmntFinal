$(document).ready(function() {
	/*$(window).resize(function(){
	 var w = window.innerWidth;var h = window.innerHeight;
	 $("span").text("Width: " + w + " Heigth: " + h);
	 });*/
	var count = 0;
	var arr = new Array("#fname", "#password", "#confirmpassword", "#email", "#website");
	
	$("button").click(function() {
		count = 0;
		for (var i = 0; i < arr.length; i++) {
			$.fn.checkforValidity(arr[i]);
		}

		if (count == 5) {
			$("#hidden").css("display", "block");
		}
	});

	$.fn.checkforValidity = function(str) {
		if ($(str).val() != null && $(str).val() != "" && $(str).val().length > 0 && $(str).val().indexOf(' ') == -1) {
			if (str == "#confirmpassword") {
				//....Checking password matching...
				if ($(str).val() == $("#password").val()) {
					count++;
					return true;
				} else {
					$("#confirmpassword").val('');
					return false;
				}
			} else if (str == "#email") {
				//.....Domain should not be sapient.com......
				if ($(str).val().indexOf('sapient.com') == -1) {
					count++;
					return true;
				} else {
					$("#email").val('');
					return false;
				}

			} else if (str == "#website") {
				if ($(str).val().indexOf('http') != -1) {
					count++;
					return true;
				} else {
					$("#website").val('');
					return false;
				}

			} else {
				count++;
				return true;
			}

		} else {
			return false;
		}
	};

}); 