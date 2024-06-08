function sendMail() {

  var isValidForm = document.forms["myForm"].checkValidity();
  if (isValidForm)
  {
      document.forms["myForm"].submit();

      
      location.replace("#up");
        
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
        
        var myModal = new bootstrap.Modal(document.getElementById('contactModal'), { 
          keyboard: false 
        }) 
        myModal.show();
  

    })
    .catch(err=>console.log(err));
  }
  else
  {
   location.replace("./index.html?#contact");
    // alert("Please fill in the fields! ");

    // var myModal = new bootstrap.Modal(document.getElementById('contactModal2'), { 
    //   keyboard: false 
    // }) 
    // myModal.show() 
  
    // return false;
  }



}

