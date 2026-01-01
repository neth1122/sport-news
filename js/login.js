function getPassword()
{
    var p1= document.getElementById('password1').value;
	var p2= document.getElementById('password2').value;

    if (p1 === p2) {
        //password is a match
    }
    else{
        alert("Password doesn't match");
    }


    var email = document.getElementById('email').value;

    if (email.indexOf("@") === -1) 
        {
        alert("Email address must contain '@' .");
        return false;
    }

    var otp= document.getElementById('Otp').value;

    if (otp == '') {
        alert("Must enter OTP");
    }
    else{
        return true;
    }

    var pass= document.getElementById('password1 , password2').value;

    if (pass == '') {
        alert("Must enter Password");
    }
    else{
        return true;
    }
} 


function getOtp()
{
    var k = 1;

    while (k <= 6)
    {
        let magicnumber = Math.floor(10000 + Math.random() * 900000);
        //document.write(+ magicnumber);
        document.getElementById('Otp').value = + magicnumber;
        k = k + 1;
    }
}

