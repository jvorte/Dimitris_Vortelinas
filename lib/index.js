function sendMail() {

  var isValidForm = document.forms["myForm"].checkValidity();
  if (isValidForm)
  {
      document.forms["myForm"].submit();

        
  var params = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    message: document.getElementById("message").value,
  };

  const serviceID = "service_mxr11i5";
  const templateID = "template_ksnq0yr";

    emailjs.send(serviceID, templateID, params)
    .then(res=>{
        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("message").value = "";
        console.log(res);
        alert("Your message sent successfully!!!")

  
        location.replace("./index.html")

    })
    .catch(err=>console.log(err));
  }
  else
  {

    alert("Please fill in the fields! ");
    // location.replace("./index.html?#contact");
    return false;
  }



}

