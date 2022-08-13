$(document).ready(function () {
    jQuery.validator.addMethod(
      "lettersonly",
      function (value, element) {
        return this.optional(element) || /^[a-z ]+$/.test(value);
      },
      "Letters only please"
    );
    jQuery.validator.addMethod(
      "minlength5",
      function (value, element) {
        return this.optional(element) || (value.trim().length >= 5);
      },
      "Minimum 5 characters without space"
    );
    $(".submit-form").validate({
      rules: {
        name: {
          minlength5: true,
          lettersonly: true,
          required: true,
          minlength: 4,
        },
        email: {
          required: true,
          email: true,
        },
        subject: {
          required: true,
          minlength: 10,
          minlength5: true,
          lettersonly: true,
        },
        message: {
          minlength5: true,
          required: true,
          minlength: 10,
          maxlength: 200,
        },
      },
      messages: {
        name: {
          minlength: "Please Enter Your Full Name",
        },
        email: {
          email: "Please enter a valid Email id",
        },
        message: {
          minlength: "Its too short! minimum 10 characters",
          maxlength: "Oh no! it's too large",
        },
      },
      submitHandler: function (form) {
        console.log("True");
        console.log("in function submit");
        submit();
      },
    });
  });
  function submit() {
    $.ajax({
      url: "https://script.google.com/macros/s/AKfycbyFbHQTBGOKzh3DQ4a-Jop_PJSug-zBn1vXY1232DNMnPWS0U2fVdDKTnUYtpaSZdMJ4g/exec",
      data: $(".submit-form").serialize(),
      method: "POST",
      success: function (response) {
        alert("Form submitted successfully");
        window.location.reload();
      },
      error: function (err) {
        alert("Something Error");
      },
    });
  }